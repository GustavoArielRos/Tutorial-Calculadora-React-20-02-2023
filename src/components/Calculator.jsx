
/* aqui pode ser usado como um "html" para o App.js */

/*vamos baixar uma biblioteca para fazer o "cointaner" dos botões da calculadora
  ela ja vem com os botões organizados na posição certa
  é melhor usar isso do que ficar organizando cada botão na posição
  "<Container> é dessa biblioteca baixada*/




import React from 'react'

import './Calculator.css'

import Container from '@mui/material/Container';
import { Box } from "@mui/system";
import { useState } from "react";


export default function  Calculator() {
    /* criando a parte que o usuário digita "a magica por tras" */
    
    /*criando as variáveis globais*/
    /*a ideia de variavel no react, é de uma variável atual(que possue o valor) e uma futura(que irá receber esse valor)*/
    /*isso ajuda para sempre poder "resetar" o valor atual */
    const [num,setNum] = useState(0);
    const [oldnum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();
    
    /*meio que o esquema é criar a função para cada tipo de botão da calculadora */

    /*criando função que vai tacar um valor escolhido pelo usuario no h1 result */
    /* "e.target" -> mira no botão específico */
    /* "e.taget.value" -> pega o valor do botão */
    function inputNum(e){
        var input = e.target.value;
        if(num===0){   /*colocar o if para o "zero" não ficar na frente na hora de colocar os valores */
            setNum(input);
        }else{
            setNum(num + input); /*para ficar adicionando na calculara toda hora que apertar o numero */
        }
    }
    
    /*função que zera o valores(apaga eles)*/
    function clear(e){
        setNum(0);
    }

    /*função que dividi o número por 100 para gerar a porcentagem*/
    function porcentage(){
        setNum(num / 100);
    }
    
    /*função que troca o numero de positivo para negativo e vice-versa*/
    function changeSign(){
        if(num>0){
            setNum(-num);
        }else{
            setNum(Math.abs(num));
        }
    }

    /*funcção que lida com os operadores*/
    /*a ideia é basicamente:*/
    /* -receber o tipo de operador */
    /* -colocar o numero digitado na variável que indica um numero antigo */
    /* -colocar o numero atual com o valor de "0" para indicar que pode ser adicionado um outro */
    function operatorHandler(e){
        var operatorInput = e.target.value;
        setOperator(operatorInput); /*o valor do operador vai ser o "operatorInput" */
        setOldNum(num);/* o número antigo vai receber o valor do numero atual */
        setNum(0);/*o numero atual vai receber o valor de 'zero',isso para indicar que pode ser adicionado um novo valor*/
    }

    /*função que faz o cálculo matemático */
    function calculate(){
        /*"parseFloat" fazer que uma string seja um numero mesmo */
        if(operator === "/"){
            setNum(parseFloat(oldnum)/parseFloat(num));
        } else if (operator === "X"){
            setNum(parseFloat(oldnum) * parseFloat(num));
        } else if (operator === "-"){
            setNum(parseFloat(oldnum) - parseFloat(num));
        } else if (operator === "+"){
            setNum(parseFloat(oldnum) + parseFloat(num));
        }
    }
    


    return (
        <div>
            <Box m={5}/>
            <Container maxWidth="xs">
                <div className='wrapper'>
                    <Box m={12}/>
                    <h1 className="result">{num}</h1>
                    <button onClick={clear}>AC</button>
                    <button onClick={changeSign}>+/-</button>
                    <button onClick={porcentage}>%</button>
                    <button className='orange' onClick={operatorHandler} value="/">/</button>
                    <button className='gray'  onClick={inputNum} value={7}>7</button>
                    <button className='gray'  onClick={inputNum} value={8}>8</button>
                    <button className='gray'  onClick={inputNum} value={9}>9</button>
                    <button className='orange' onClick={operatorHandler} value="X">X</button>
                    <button className='gray'  onClick={inputNum} value={4}>4</button>
                    <button className='gray'  onClick={inputNum} value={5}>5</button>
                    <button className='gray'  onClick={inputNum} value={6}>6</button>
                    <button className='orange' onClick={operatorHandler} value="-">-</button>
                    <button className='gray'  onClick={inputNum} value={1}>1</button>
                    <button className='gray'  onClick={inputNum} value={2}>2</button>
                    <button className='gray'  onClick={inputNum} value={3}>3</button>
                    <button className='orange' onClick={operatorHandler} value="+">+</button>
                    
                    <button className='gray'  onClick={inputNum} value={0}>0</button>
                    <button className='gray' onClick={inputNum} value={"."}>,</button>
                    <button className='gray' style={{visibility: "hidden"}}>,</button>

                    <button className='orange' onClick={calculate}>=</button>
                    

                </div>
            </Container>
        </div>
    )
}