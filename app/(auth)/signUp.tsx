import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link } from 'expo-router';

const SignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username : "",
    email : "",
    password : ""
  })

  const submit = async() => {

  } 
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full flex justify-center h-full px-4 my-6'>
          <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[34px]'/>
          <Text className='text-2xl font-semibold text-white mt-8 font-psemibold py-2'>Log In to Aora</Text>
          <FormField title="Username" value={form.username} handleChangeText={(e : any) => setForm({...form, username : e})}/>
          <FormField title="Email" value={form.email} handleChangeText={(e : any) => setForm({...form, email : e})}/>
          <FormField title="Password" value={form.password} handleChangeText={(e : any) => setForm({ ...form, password : e})}/>
          <CustomButton title="Sign Up" handlePress={submit} containerStyles="mt-7" isLoading={isSubmitting}/>
          <View className='flex justify-center items-center flex-row gap-2 pt-5'>
            <Text className='text-lg text-gray-100 font-pregular'>Already have an account?</Text>
            <Link href="/signIn" className='text-lg text-secondary-100 font-psemibold'>
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp