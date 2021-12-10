
import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, ActivityIndicator } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Form from './src/components/Form'
import ResultList from './src/components/ResultList';
import axios from 'axios'


export default function App() {

  const [coin, setCoin] = useState('')
  const [cripto, setCripto] = useState('')
  const [checkListApi, setCheckListApi] = useState(false)
  const [resultApi, setResultApi] = useState({})
  const [load, setLoad] = useState(false)

  useEffect(() => {

    const checkListCripto = async () => {
      if (checkListApi) {
        const URI = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${coin}`
        const res = await axios.get(URI)
        setLoad(true)
        setTimeout(() => {
          setResultApi(res.data.DISPLAY[cripto][coin]);
          setCheckListApi(false)
          setLoad(false)
        }, 2000)
      }
    }

    checkListCripto()

  }, [checkListApi])

  const spinnerLoad = load ? <ActivityIndicator size="large" color="#7e22ce" style={tw`mt-10`} /> : <View style={tw`mt-10 bg-purple-700 px-5`}><ResultList resultApi={resultApi} /></View>
  return (
    <ScrollView style={tw` android:pt-2 bg-gray-100`}>
      <View style={tw` bg-purple-700 `}>
        <Text style={tw`text-center py-4 pt-10 text-white font-bold text-4xl tracking-widest `}>CRIPTO</Text>
      </View>

      <Image style={tw`h-52 w-full rounded-b-full`} source={require('./assets/img/cripto-bg.jpg')} />

      <View style={tw`px-4 mt-10`}>
        <Form
          coin={coin}
          cripto={cripto}
          setCoin={setCoin}
          setCripto={setCripto}
          setCheckListApi={setCheckListApi}
        />
      </View>

      {spinnerLoad}



    </ScrollView>
  );
}