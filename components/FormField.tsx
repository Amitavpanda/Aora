import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '@/constants';

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props} : any) => {
const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`${otherStyles} space-y-2`}>
      <Text className='text-gray-100'>{title}</Text>
      <View className='flex flex-row items-center bg-black-100 rounded-2xl  w-full px-4 h-16'>
        <TextInput className='flex-1 text-white font-psemibold text-base' value={value} placeholder={placeholder} placeholderTextColor='#787888' onChangeText={handleChangeText} secureTextEntry={title === "Password" && !showPassword}/>
        {title === 'Password' && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image source={!showPassword ? icons.eye : icons.eyeHide} className='w-6 h-6 ' resizeMode='contain'/>
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField