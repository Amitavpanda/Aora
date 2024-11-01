import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import CustomButton from './CustomButton'
import { router } from 'expo-router'

interface EmptyStateProps {
    title : string,
    subtitle : string
}

const EmptyState = ({title, subtitle } : EmptyStateProps ) => {
  return (
    <View className='flex items-center justify-center px-4'>
        <Image source={images.empty} resizeMode='contain' className='w-[270px] h-[216px]'/>
        <Text className='text-sm font-pmedium text-gray-100'>{title}</Text>
        <Text className='text-xl  text-center font-psemibold text-white mt-2'>{subtitle}</Text>
        <CustomButton title="Create Video" handlePress={() => router.push("/home")} containerStyles="w-full my-5"/>
    </View>
  )
}

export default EmptyState