import React from 'react'
import './AuthModal.sass'

import SingIn  from "./SingIn/SingIn"
import Registration from './Registration/Registration'

import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const AuthModal = () => {
	return (
		<div className="AuthModal">
			<SingIn />
			<Registration />
		</div>
	)
}

export default AuthModal
