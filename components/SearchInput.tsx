import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '@/constants';

const SearchInput = (initialQuery : any) => {
    const [query, setQuery] = useState(initialQuery || '');
  return (
    <View className='flex flex-row items-center space-x-4 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary'>
        <TextInput className='text-base mt-0.5 text-white flex-1 font-pregular' value={query} placeholder='Search a video topic' placeholderTextColor='#CDCDE0' onChangeText={(e) => setQuery(e)}/>
        <TouchableOpacity onPress={() => {
            if(query === "") return Alert.alert("Missing query", "Please input something to search results over database")
        }}>
            <Image  source={icons.search} className='w-5 h-5' resizeMode='contain'/>
        </TouchableOpacity>
    </View>
  )
}

export default SearchInput