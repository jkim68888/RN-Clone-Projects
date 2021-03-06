import React from 'react'
import { Alert, Text, View, TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const LoginForm = ({ navigation }) => {
  const loginFormSchema = Yup.object().shape({
    email: Yup.string().email().required('이메일이 필요합니다.'),
    password: Yup.string().required().min(6, '비밀번호는 6글자 이상이여야 합니다.'),
  })

  const onLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      console.log('success', email, password)
    } catch (error) {
      Alert.alert('로그인 실패!\n', `로그인 할 수 없습니다ㅠㅠ\n\n ${error.message}`, [
        {
          text: '확인',
          onPress: () => console.log('확인'),
          style: 'cancel',
        },
        {
          text: '회원가입',
          onPress: () => navigation.push('SignupScreen'),
        },
      ])
    }
  }

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          onLogin(values.email, values.password)
        }}
        validationSchema={loginFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View
              style={[
                styles.inputField,
                { borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red' },
              ]}
            >
              <TextInput
                placeholder="전화번호, 아이디 또는 이메일"
                placeholderTextColor="#444"
                keyboardType="email-address"
                autoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            <View
              style={[
                styles.inputField,
                { borderColor: 1 > values.password.length || values.password.length > 6 ? '#ccc' : 'red' },
              ]}
            >
              <TextInput
                placeholder="비밀번호"
                placeholderTextColor="#444"
                secureTextEntry={true}
                autoCorrect={false}
                textContentType="password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            <View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
              <Text style={{ color: '#6bb0f5' }}>비밀번호 찾기</Text>
            </View>
            <Pressable titleSize={20} style={styles.button(isValid)} onPress={handleSubmit} disabled={!isValid}>
              <Text style={styles.buttonText}>로그인</Text>
            </Pressable>
            <View style={styles.signupContainer}>
              <Text>계정이 없으신가요? </Text>
              <TouchableOpacity onPress={() => navigation.push('SignupScreen')}>
                <Text style={{ color: '#6bb0f5' }}> 회원가입</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 60,
  },
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: '#fafafa',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: (isValid) => ({
    backgroundColor: isValid ? '#0096f6' : '#9acaf7',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4,
  }),
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  signupContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'center',
  },
})

export default LoginForm
