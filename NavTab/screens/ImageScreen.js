import * as React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';

export default function ImageScreen() {
  return(
    <ScrollView>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', margin: 20}}>Galería de Logos - Ligas Europeas</Text>
        <Image 
          source={{uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinfbw332e0UzbLOV7XBjJtUA43wR1Lm7cRq1UKVMHwTpK2J49ZE3vbN6zhmGX-72OHQcHZo63GtpH-qT6CBZ409itDt9bqeTARdwkJON1vMQkDLx5MA0HhkuUxmaTrjfQwyrwl-8QSkEESg_Toj_IF2zMxyAYqcA2Buw1Dq2f_5FeKnLpnWkPXfOBD-DI/s16000/Premier%20League.png'}}
          style={{width: 300, height: 300, margin: 15}}
        />
        <Image 
          source={{uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirXlLZ6JGoNTRW4xbsozgyfWK6Px4XVkQ-AOxSeoSOjvB6Uma4rYshen8djk6uIwkgD_KsHJl9d7WD6jCcPvLLPa6DtB25ok9qszZ6EoYPcYL_FiOOjsVQVWrKQsJTy9dT6XGFYOCj1Q412AVMNvXn40SCvw4Q_34Nhu33-XhhlH5P3GMMzle-fBSFg6A/s16000/LaLiga.png'}}
          style={{width: 300, height: 300, margin: 15}}
        />
        <Image 
          source={{uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-bYQ_NKnIkxVV3picXvDAlA2HbQc5P00fPAiufxTZSzblHCB78kMRZBY8c3vw_6m8ftCCe5um1FxzEON3ecAC6L2fl3bmMaF2_kOFYUAsJQtaBzvxGx6UOSXBghAAfZyzO7QIOTCBb7oVzG1e6Awqec2R6BiRdNtgm3BiS9IsPskLeRxtfnIQVzQZIyE/s16000/Serie%20A%20Enilive.png'}}
          style={{width: 300, height: 300, margin: 15}}
        />
        <Image 
          source={{uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiU3I0UcpOk2nXpxekhJtd7LlvNZMjrhM3Wr5NeqEzsDbteF-Atz-OT3qKqDk_bRbCELeVbGsD4MTJqb8qjb_pLXNyiXijrcyOT5xGaAVGl-nJM5ExVVdxorBzpKMJo17YT7R412xbU9cTlPeN6DuyCwyt_ycw49P33qgSfJFwPgT6DPysIjdRgFV9Kw7Y/s16000/FRA.png'}}
          style={{width: 300, height: 300, margin: 15}}
        />
        <Image 
          source={{uri: 'https://4.bp.blogspot.com/-cASKHIIs3_Y/XE0mVOOwckI/AAAAAAABUOM/XIGWdQ4BuawtlX8Y8RysY6CIXXrJ9vxeACLcBGAs/s1600/Bundesliga.png'}}
          style={{width: 300, height: 300, margin: 15}}
        />
        <Image 
          source={{uri: 'https://4.bp.blogspot.com/-DxRxXqWkmMQ/WU_F5nHQ_MI/AAAAAAABJuc/_7O0I6NHtjwgQ4-T_DyXs0O7hF-_D2VEgCLcBGAs/s1600/Eredivisie%2Bv2.PNG'}}
          style={{width: 300, height: 300, margin: 15}}
        /> 
      </View>
    </ScrollView>
  );
};