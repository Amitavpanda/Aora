import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '@/constants'


interface VideoCardProps{
    title : string,
    creator : string,
    avatar : string,
    thumbnail : string,
    video : string
}
const VideoCard = ({title, creator, avatar, thumbnail, video} : VideoCardProps) => {
    const [play, setPlay] = useState(false);
  return (
    <View className='flex flex-col items-center px-4 mb-10'>
        {/* first row */}
        <View className='flex flex-row items-start gap-3'>
            {/* first column */}
            <View className='flex justify-center items-center flex-row flex-1'>
                 {/* first sub column */}
                <View className='w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center p-0.6'>
                    <Image source={{uri : avatar}} className='w-full h-full rounded-lg' resizeMode='cover'/>
                </View>
                {/* second sub column */}
                <View className='flex justify-center flex-1 ml-3 gap-y-1'>
                    <Text className='font-semibold text-sm text-white' numberOfLines={1}>
                        {title}
                    </Text>
                    <Text className='text-xs text-gray-100 font-pregular'>
                        {title}
                    </Text>
                    
                </View>
            </View>

            <View className='pt-2'>
                <Image source={icons.menu} className='w-5 h-5' resizeMode='contain'/>
            </View>
        </View>

        {play ? (
            <Text>Playing</Text>
        )
        
        : 
        
        (
            <TouchableOpacity activeOpacity={0.7} onPress={() =>setPlay(true)} className='w-full h-60 rounded-xl relative flex justify-center items-center'>
                <Image source={{uri : thumbnail}} className='w-full h-full rounded-xl mt-3' resizeMode='cover'/>
                
            </TouchableOpacity>
        )
        }
    </View>
  )
}

export default VideoCard