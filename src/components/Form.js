import React, { useState, useEffect } from 'react';
import { Text, View, TouchableHighlight, Alert } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Picker } from '@react-native-picker/picker'
import axios from 'axios'

const Form = ({ coin, cripto, setCoin, setCripto, setCheckListApi }) => {
    const [state, setState] = useState([])

    const getCoin = coin => {
        setCoin(coin)
    }
    const getCripto = criptoCoin => {
        setCripto(criptoCoin)
    }

    const checkList = () => {
        if (coin.trim() === '' || cripto.trim() === '') {
            showAlert()
            return
        }
        setCheckListApi(true)
    }

    const showAlert = () => {
        Alert.alert(
            'Error...',
            'Ambos campos son obligatorios',
            [
                {
                    text: 'Ok'
                }
            ]
        )

    }

    useEffect(() => {

        const getApiCoins = async () => {
            const URI = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const res = await axios.get(URI).then(res => {
                setState(res.data.Data)
            })
        }
        getApiCoins()

    }, [])

    return (
        <View>

            <Text style={tw`font-bold text-center text-2xl my-5`}>Modena</Text>

            <Picker selectedValue={coin} onValueChange={coin => getCoin(coin)}>
                <Picker.Item label='- Selecione -' value='' />
                <Picker.Item label='Peso Mexicano' value='MXN' />
                <Picker.Item label='Dolar de Estados Unidos' value='USD' />
                <Picker.Item label='Euro' value='EUR' />
                <Picker.Item label='Libra Esterlina' value='GBP' />
            </Picker>

            <Text style={tw`font-bold text-center text-2xl my-5`}>Criptomodena</Text>

            <Picker selectedValue={cripto} onValueChange={criptoCoin => getCripto(criptoCoin)}>
                <Picker.Item label='- Selecione -' value='' />
                {
                    state.map(criptoCoin => (
                        <Picker.Item key={criptoCoin.CoinInfo.Id} label={criptoCoin.CoinInfo.FullName} value={criptoCoin.CoinInfo.Name} />
                    ))
                }
            </Picker>

            <View style={tw`mt-10 `}>
                <TouchableHighlight
                    onPress={checkList}
                    style={tw`py-4 bg-purple-700 rounded-sm mx-2`}>
                    <Text style={tw`text-white text-center font-bold`}>COTIZAR</Text>
                </TouchableHighlight>
            </View>

        </View>
    )
}

export default Form