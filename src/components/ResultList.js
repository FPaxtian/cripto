import React from 'react';
import { Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const ResultList = ({ resultApi }) => {

    if (Object.keys(resultApi).length === 0) return null
    return (
        <View>
            <Text style={tw`text-white text-center py-4 pt-10 text-4xl font-bold`}>{resultApi.PRICE}</Text>
            <Text style={tw`py-4 text-white text-center text-base`}>
                Precio más alto del día {' '}
                <Text style={tw`text-xl font-bold`}>{resultApi.HIGHDAY}</Text>
            </Text>
            <Text style={tw`py-4 text-white text-center text-base`}>
                Precio más bajo del día {' '}
                <Text style={tw`text-xl font-bold`}>{resultApi.HIGHDAY}</Text>
            </Text>
            <Text style={tw`py-4 text-white text-center text-base`}>
                Variación de las últimas 24 horas {' '}
                <Text style={tw`text-xl font-bold`}>{resultApi.CHANGEPCT24HOUR}</Text>
            </Text>
            <Text style={tw`py-4 pb-10 text-white text-center text-base`}>
                Última actualización {' '}
                <Text style={tw`text-xl font-bold`}>{resultApi.LASTUPDATE}</Text>
            </Text>

        </View>
    )

}

export default ResultList