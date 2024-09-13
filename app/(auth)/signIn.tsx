import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link, router } from 'expo-router';
import { createUser, signIn } from '@/lib/appwrite';

const SignIn = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email : "",
    password : ""
  })

  const submit = async() => {
    if(!form.email || !form.password){
      Alert.alert("Error, Please fill all the fields");
    }
    setSubmitting(true);

    try{
      await signIn(form.email, form.password)
      router.replace('/home');

    }
    catch(err : any){
      Alert.alert("Error", err.message);
    }
    finally{
      setSubmitting(false);
    }
  } 
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full flex justify-center h-full px-4 my-6'>
          <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[34px]'/>
          <Text className='text-2xl font-semibold text-white mt-8 font-psemibold py-2'>Log In to Aora</Text>
          <FormField title="Email" value={form.email} handleChangeText={(e : any) => setForm({...form, email : e})}/>
          <FormField title="Password" value={form.password} handleChangeText={(e : any) => setForm({ ...form, password : e})}/>
          <CustomButton title="Sign In" handlePress={submit} containerStyles="mt-7" isLoading={isSubmitting}/>
          <View className='flex justify-center items-center flex-row gap-2 pt-5'>
            <Text className='text-lg text-gray-100 font-pregular'>Don't have an account?</Text>
            <Link href="/signUp" className='text-lg text-secondary-100 font-psemibold'>
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn