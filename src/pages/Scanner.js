import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`O código de barras ${type} e dados ${data} foi escaneado!`);
    };

    if (hasPermission === null) {
        return <Text>Solicitando permissão de câmera</Text>;
    }
    if (hasPermission === false) {
        return <Text>Sem acesso à câmera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned &&
                <TouchableOpacity style={styles.button} onPress={() => setScanned(false)}>
                    <Text style={styles.text}>Toque para Scanear novamente</Text>
                </TouchableOpacity>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    text: {
        color: '#536162'
      },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffaaa7',
        margin: 20,
        borderRadius: 10,
        height: 50,
      },
});
