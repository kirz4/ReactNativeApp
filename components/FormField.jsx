import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import { icons } from '../constants'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    const [showPassword, setshowPassword] = useState(false)
    return (
      <View className={`space-y-2 ${otherStyles}`}>
        <Text className="text-base text-gray-100 font-pmedium mb-2">{title}</Text>
        <View className="w-full h-16 px-4 rounded-2xl bg-black-100 border-2 border-black-200 focus-within:border-secondary items-center flex-row ">
          <TextInput
            className="flex-1 text-white font-psemibold text-base outline-none "
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={title === 'Password' && !showPassword}
            
          />

          {title === 'Password' && (
            <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
                <Image source={!showPassword ? icons.eye : icons.eyeHide } 
                 style={{
                 width: 36, height: 30
                }} 
                className="" resizeMode='contain'/>

            </TouchableOpacity>

          )}
        </View>
      </View>
    );
  };
  
  export default FormField;
