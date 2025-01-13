import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity  
    onPress={handlePress}
    activeOpacity={0.7}
    style={{
        // minHeight: 62, // Altura mínima
        //borderRadius: 12,  Borda arredondada (equivalente a rounded-md)
        backgroundColor: "#FF9C01", 
      }} className={`justify-center items-center rounded-md min-h-[62px] bg-secondary-200 ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
      disabled={isLoading}>
        <Text className={`text-primary font-psemibold ${textStyles}`} style={{fontSize: 18,
            lineHeight: 28,
        }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton