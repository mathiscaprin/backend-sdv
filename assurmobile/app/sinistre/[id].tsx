import fetchData, {fetchDocument} from "@/hooks/fetchData";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Platform, ScrollView, View } from "react-native";
import { Button, Card, HelperText, Switch, Text, TextInput } from "react-native-paper";
import * as DocumentPicker from 'expo-document-picker';

type SinistreType = {
  id: number | string,
  plate?: string,
  sinister_datetime?: any,
  context?: string,
  driver_firstname?: string,
  driver_lastname?: string,
  call_datetime?: any,
  driver_responsability: boolean
}

type DocumentType = {
  id: number | string,
  label?: string,
  type?: string,
  path?: string,
}

export default function SinistreDetailScreen() {
    // implémenter un state local pour charger le sinistre localement
    const [ sinistre, setSinistre ] = useState<SinistreType>()
    // Store contenant le document temporaire avant envoi du formulaire
    const [ pickedFile, setPickedFile ] = useState<DocumentPicker.DocumentPickerAsset | null>(null)
    // store pour le libellé du document
    const [ documentLabel, setDocumentLabel ] = useState('')
    // documents liés au sinistre
    const [ documents, setDocuments ] = useState<DocumentType[]>([])
    const [ loadingDocuments, setLoadingDocuments ] = useState(false)
    // gestion de mes erreurs
    const [ error, setError ] = useState<string | null>(null)

    // récupérer le paramètre d'URL
    const { id } = useLocalSearchParams<{ id: string }>();

   // fonction de chargement d'un fichier
    const pickDocument = async () => {
        const result = await DocumentPicker.getDocumentAsync({
            multiple: false,
        });
        if (result.canceled) {
            return;
        }

        const asset = result.assets?.[0];
        if (!asset) {
            return;
        }

        setPickedFile(asset);
    }

    const loadDocuments = () => {
        if (!id) return;
        setLoadingDocuments(true);
        fetchData('/sinisters/' + id + '/documents', 'GET', {}, true)
            .then(data => {
                setDocuments(data.documents || []);
            })
            .catch(err => {
                console.log('Error on get documents ' + err.message);
            })
            .finally(() => {
                setLoadingDocuments(false);
            });
    }

    // Soumission du formulaire :
    const submitForm = () => {
        if (!pickedFile) {
            setError('Pas de fichier sélectionné');
            return;
        }

        const formData = new FormData();
        formData.append("label", documentLabel);
        if (Platform.OS === "web") {
            const webfile = (pickedFile as DocumentPicker.DocumentPickerAsset & { file?: File }).file;
            if (webfile) {
                formData.append("file", webfile);
            } else {
                setError('Impossible de lire le fichier web sélectionné');
                return;
            }
        } else {
            formData.append("file", {
                uri: pickedFile.uri,
                name: pickedFile.name,
                type: pickedFile.mimeType || 'application/octet-stream'
            } as unknown as Blob);
        }
        setError(null);
        fetchDocument('/sinisters/' + id + '/documents', 'POST', formData, true)
            .then(response => {
                console.log(response);
                setDocumentLabel('');
                setPickedFile(null);
                loadDocuments();
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            });
    }

    // fetch récupérer le sinistre courant
    useEffect(() => {
        fetchData('/sinisters/' + id, 'GET', {}, true)
            .then(data => {
                setSinistre(data.sinister)
            })
            .catch(err => {
                console.log('Error on get sinistre ' + err.message)
            })
    }, [id])

    useEffect(() => {
        if (id) {
            loadDocuments();
        }
    }, [id])

    if(!sinistre) {
        return (
            <View>
                <Text>Le sinistre est introuvable !</Text>
            </View>
        )
    }

    return (
        <ScrollView>
            <Card
                key={sinistre.id}
            >
                <Card.Title title="Mon sinistre" />
                <Card.Content>
                    <Text>Plaque : {sinistre.plate}</Text>
                    <Text>Date du sinistre : {sinistre.sinister_datetime}</Text>
                    <Text>Date de signalement du sinistre : {sinistre.call_datetime}</Text>
                    <Text>Nom du conducteur : {sinistre.driver_lastname}</Text>
                    <Text>Prénom du conducteur : {sinistre.driver_firstname}</Text>
                    <Text>Contexte du sinistre : {sinistre.context}</Text>
                    <Text>Responsabilité conducteur : </Text>
                    <Switch
                        disabled
                        value={sinistre.driver_responsability}
                    />
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Text variant="titleMedium">Documents liés</Text>
                    <Button mode="text" onPress={loadDocuments}>
                        Rafraîchir
                    </Button>
                    {loadingDocuments ? (
                        <Text>Chargement des documents...</Text>
                    ) : documents.length > 0 ? (
                        documents.map((documentItem) => {
                            const fileName = documentItem.path?.split("/").pop() || "Document";
                            return (
                                <Card key={documentItem.id} style={{ marginTop: 12 }}>
                                    <Card.Content>
                                        <Text>Libellé : {documentItem.label || "Non renseigné"}</Text>
                                        <Text>Type : {documentItem.type || "Inconnu"}</Text>
                                        <Text>Nom du fichier : {fileName}</Text>
                                    </Card.Content>
                                </Card>
                            );
                        })
                    ) : (
                        <Text>Aucun document lié pour ce sinistre.</Text>
                    )}
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Text variant="titleMedium">Envoyer un document :</Text>
                    <TextInput
                        label="Libellé du document"
                        value={documentLabel}
                        onChangeText={setDocumentLabel}
                    />
                    <Button
                        mode="outlined"
                        onPress={pickDocument}
                        style={{ marginTop: 12 }}
                    >
                        Fichier : {pickedFile ? pickedFile.name : "Sélectionner"}
                    </Button>
                    <HelperText type="error" visible={Boolean(error)}>
                        {error}
                    </HelperText>
                    <Button onPress={submitForm} style={{ marginTop: 12 }}>
                        Envoyer le document
                    </Button>
                </Card.Content>
            </Card>
        </ScrollView>
    )
}