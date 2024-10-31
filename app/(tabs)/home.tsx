import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import SearchInput from '@/components/SearchInput'
import Trending from '@/components/Trending'
import EmptyState from '@/components/EmptyState'
import useAppwrite from '@/lib/useAppwrite'
import { getAllPosts } from '@/lib/appwrite'
import VideoCard from '@/components/VideoCard'

const Home = () => {

  const { data : posts, refetch} = useAppwrite(getAllPosts);
  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList 
        data={posts}
        keyExtractor={(item) => item.$id} 
        renderItem={({ item }) => (
          <VideoCard title={item.title} thumbnail={item.thumbnail} video={item.video} creator={item.creator.username} avatar={item.creator.avatar} />
        )}
        ListHeaderComponent={() => (
          <View className='flex my-6 px-4 space-y-4'>
              <View className='flex flex-row items-start justify-between mb-6'>
                <View> 
                  <Text className='font-pmedium text-sm text-gray-100'>Welcome Back</Text>
                  <Text className='text-2xl font-psemibold text-white'>JSMastery</Text>
                </View>

                <View>
                  <Image source={images.logoSmall} className='w-9 h-10' resizeMode='contain'/>
                </View>
              </View>


              <SearchInput />

              <View className='w-full flex-1 pt-5 pb-8'>
                <Text className='text-lg font-pregular text-gray-100 mb-3'>
                  Latest Videos
                </Text>

                <Trending />
              </View>


              
          </View>
        )}

        ListEmptyComponent={() => (
          <EmptyState title="No videos found" subtitle="Be the first one to upload a video"/>
        )}
        />
    </SafeAreaView>
  )
}

export default Home