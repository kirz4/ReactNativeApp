import { View, Text, Image } from 'react-native'
import React from 'react';
import { Tabs, Redirect} from 'expo-router';
import { icons } from '../../constants';



const TabIcon = ({ icon, color, name, focused }) => {
    return (
    <View
    className=" items-center justify-center gap-2 min-w-[70px]"
    >
        <Image
                source={icon}
                resizeMode="contain"
                style={{
                    width: 24, // Equivalente a "w-6" no Tailwind
                    height: 24, // Equivalente a "h-6" no Tailwind
                    tintColor: color, // Define a cor do ícone
                }}

        />
        <Text className= {` ${focused ? 'font-psemibold': 'font-pregular'} text-xs whitespace-nowrap text-center` } 
        style={{
          color: color,
          textAlign: "center",
          lineHeight: 16,
        }}>
            {name}
        </Text>
    </View>
    )
}

const TabsLayout = () => {
  return (
    <>
        <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor:'#FFA001',
            tabBarInactiveTintColor:'#CDCDE0',
            tabBarStyle:{
                backgroundColor:'#161622',
                borderTopWidth: 1,
                borderTopColor: '#232533',
                height: 84,
                paddingTop: 12, // Espaçamento superior

            }
            
        }}
        >
            <Tabs.Screen 
            name="home"
            options= {{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({ color, focused}) => (
                    <TabIcon
                    icon= {icons.home}
                    color={color}
                    name="Home"
                    focused = {focused}
                    />
                )
            }}
            />
            <Tabs.Screen 
            name="bookmark"
            options= {{
                title: 'Bookmark',
                headerShown: false,
                tabBarIcon: ({ color, focused}) => (
                    <TabIcon
                    icon= {icons.bookmark}
                    color={color}
                    name="Bookmark"
                    focused = {focused}
                    />
                )
            }}
            />
            <Tabs.Screen 
            name="create"
            options= {{
                title: 'Create',
                headerShown: false,
                tabBarIcon: ({ color, focused}) => (
                    <TabIcon
                    icon= {icons.plus}
                    color={color}
                    name="Create"
                    focused = {focused}
                    />
                )
            }}
            />
            <Tabs.Screen 
            name="profile"
            options= {{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({ color, focused}) => (
                    <TabIcon
                    icon= {icons.profile}
                    color={color}
                    name="Profile"
                    focused = {focused}
                    />
                )
            }}
            />
        </Tabs>
    </>
  )
}

export default TabsLayout