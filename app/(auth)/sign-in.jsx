import { View, Text, Image, ScrollView, Alert, Button } from 'react-native'
import React, { useState }  from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import  CustomButton  from "../../components/CustomButton"

import { signIn, account } from '../../lib/appwrite'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import { Link, router } from 'expo-router'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [isSubmitting, setisSubmitting] = useState(false)
  const submit = async () => {
    console.log('Submit function called');
    if (!form.email || !form.password) {
        Alert.alert('Error', 'Please fill in all the fields');
        return;
    }
    console.log('Submitting form:', form);
    setisSubmitting(true);
    try {
        // Tenta buscar a sessão atual
        let session;
        try {
            session = await account.getSession('current');
            console.log('Current session found:', session);
        } catch (error) {
            if (error.message.includes('missing scope')) {
                console.log('No active session. Creating a new one...');
            } else {
                throw error;
            }
        }

        // Se não há sessão ativa, cria uma nova
        if (!session) {
            session = await signIn(form.email, form.password);
            console.log('New session created:', session);
        }

        router.replace('/home'); // Redireciona para a página inicial
    } catch (error) {
        console.error('Error during sign in:', error.message);
        Alert.alert('Error', error.message);
        setisSubmitting(false);
    }
};
   return (
      <SafeAreaView className="bg-primary h-full">
        <ScrollView>
          <View className="justify-center min-h-[82vh] px-4 my-6">
            <Image source={images.logo} 
            resizeMode='contain'
            style={{width: 115, height: 35, marginBottom:14}}
            />

            <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Log in to Aora</Text>
            <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => {
              console.log('Email changed:', e);
              setForm({ ...form, email: e})}}
            otherStyles="mt-7"
            keyboardType="email-address"
            />
            <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => {
              console.log('Password changed:', e);
              setForm({ ...form, password: e})}}
            otherStyles="mt-7"
            />
            <CustomButton 
            title='Sign In'
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
            />
            
            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Don't have account?
              </Text>
              <Link href="/sign-up" className='font-psemibold text-secondary text-lg'>Sign Up</Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
  )
}

export default SignIn