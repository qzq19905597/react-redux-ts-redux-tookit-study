import styled from "@emotion/styled";
import { Button, Card, Form, Input } from "antd";
import { useAuth, AuthProps } from "context/auth-context";
// import loginBg from "img/login/bg.jpg"

// import qs from "qs";
// import { FormEvent } from "react";
const apiUrl = process.env.REACT_APP_API_URL;
export const LoginScreen = () => {
  const { login } = useAuth();
  // const { user, login } = useAuth();
  const handleLogin = (values: AuthProps) => {
    console.log(values);

    // console.log(event.nativeEvent);

    // event.preventDefault();
    // const username = (event.currentTarget.elements[0] as HTMLInputElement)
    //   .value;
    // const password = (event.currentTarget.elements[1] as HTMLInputElement)
    //   .value;
    login({ username: values.username, password: values.password });
  };
  const handleRegister = (values: AuthProps) => {
    // console.log(event.nativeEvent);

    // event.preventDefault();
    // const username = (event.currentTarget.elements[0] as HTMLInputElement)
    //   .value;
    // const password = (event.currentTarget.elements[1] as HTMLInputElement)
    //   .value;
    fetch(`${apiUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
    }).then(async (response) => {});
  };
  return (
    <>
      <LoginCard>
        <Form onFinish={handleLogin}>
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input placeholder="请输入用户名"></Input>
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password placeholder="请输入密码"></Input.Password>
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Button name="login" htmlType="submit" type="primary">
              登录
            </Button>
          </Form.Item>
        </Form>
        <Form onFinish={handleRegister}>
          <Form.Item label="用户名" name="username">
            <Input placeholder="请输入用户名"></Input>
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input.Password placeholder="请输入密码"></Input.Password>
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Button name="login" htmlType="submit" type="primary">
              注册
            </Button>
          </Form.Item>
        </Form>
      </LoginCard>
    </>
  );
};

const LoginCard = styled(Card)`
  width: 300px;
  margin: 0 auto;
`;
// const LoginDiv = styled.div`
// height: 100vh;
/* background: url(${loginBg}) no-repeat; */
/* background-size: cover; */
// `
