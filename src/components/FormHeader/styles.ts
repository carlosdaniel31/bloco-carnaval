import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 35% 35% 20%;
  gap: 5%;
  padding: 40px;
  border-radius: 10px;
  background: #fff;
  border: 1px solid #EAEAEA;
  position: relative;
  margin-top: 40px;

  .container-input{
    position: relative;
    display: flex;
  }

  .container-input{
    position: relative;
    display: flex;
  }

  .container-input.drop{
    display: flex;
    flex-direction: column;
  }

  .container-input.drop div{
    display: flex;
    flex-direction: column;
  }

  .container-input.drop div{
    width: 100%;
    position: absolute;
    top: 42px;
    height: auto;
  }

  .container-input.drop input{
    cursor: pointer;
  }

  .container-input.drop div span{
    padding: 12px;
    background: #f4f4ff;
    color: #121214;
    cursor: pointer;
  }

  .container-input.drop div span:hover{
    color: #fff;
    background: #6246EA;
  }

  .container-input input{
    all: unset;
    background: #f4f4ff;
    border-radius: 5px;
    width: 100%;
    padding: 12px 12px 12px 50px;
    box-sizing: border-box;
  }

  .icon-input{
    position: absolute;
    font-size: 24px;
    color: #E45858;
    top: 10px;
    left: 14px;
  }

  .arrow{
    position: absolute;
    font-size: 24px;
    color: #858793;
    right: 12px;
    top: 10px;
  }

  button{
    padding: 12px 32px;
    background: #6246EA;
    border-radius: 5px;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`