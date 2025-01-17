import { View, Text, Image, ScrollView, Alert } from 'react-native'
import React, { useState }  from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import  CustomButton  from "../../components/CustomButton"
import { createUser } from '../../lib/appwrite'


import { images } from '../../constants'
import FormField from '../../components/FormField'
import { Link, router } from 'expo-router'

const SignUp = () => {
  const [form, setForm] = useState({
    username:'',
    email: '',
    password: ''
  })
  const [isSubmitting, setisSubmitting] = useState(false)
  const submit = async () => {
    if(!form.username || !form.email || form.password){
      Alert.alert('Error', 'Please fill in all the fields')
    } 
    setisSubmitting(true)
    try {
      const result = await createUser(form.email, form.password, form.username)
      
      // set it to global state...

      router.replace('/home')
      
    } catch (error) {
      Alert.alert('Error', error.message)
      setisSubmitting(false)
    }
  }
   return (
      <SafeAreaView className="bg-primary h-full">
        <ScrollView>
          <View className="justify-center min-h-[82vh] px-4 my-6">
            <Image source={images.logo} 
            resizeMode='contain'
            style={{width: 115, height: 35, marginBottom:14}}
            />

            <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Sign up to Aora!</Text>
            <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e})}
            otherStyles="mt-10"
            />
            <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
            />
            <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e})}
            otherStyles="mt-7"
            />
            <CustomButton 
            title='Sign Up'
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
            />
            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Have an account already?
              </Text>
              <Link href="/sign-in" className='font-psemibold text-secondary text-lg'>Sign In</Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
  )
}

export default SignUp