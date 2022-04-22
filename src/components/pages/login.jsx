import React from "react";
import {Button} from "../styled-components/button/button.jsx";
import {Input} from "../styled-components/input/input.jsx";
import {Label} from "../styled-components/label/label.jsx"


function Login() {
    
    return(

		
		<div>
				<Label>
					<p>Email: </p>
					<Input/>
					<p>Senha: </p>
					<Input/>
					<Button>Salvar</Button>
				</Label>
		</div>
					


    );
}

export default Login;
