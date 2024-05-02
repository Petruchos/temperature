<template>
  <div>
    <router-view/>
  </div>
</template>

<style>
.home{
  width: 900px;
  height: 500px;
  border-radius: 50px;
  background: #250404;
  padding:20px;
  text-align: center;
  color: #e8ac73;
}
.home h1{
  margin-top: 50px;
}
.home p{
  margin-top: 20px;
}
.home input{
  margin-top: 30px;
  background: transparent;
  border: 0;
  border-bottom: 2px solid #be986f;
  color: #ffd380;
  font-size: 14px;
  padding: 5px 8px;
  outline: none;
}
.home input:focus{
  border-bottom-color: #dabc47;
}
.home button{
  background: #dcb354;
  color: white;
  border-radius: 10px;
  border: 2px solid #c28e2d;
  padding: 10px 15px;
  margin-left: 20px;
  cursor: pointer;
  transition: transform 500ms ease;
}
.home button:hover{
  transform: scale(1.1) translateY(-5px);
}
.home button:disabled{
  background: #a2843f;
  cursor: not-allowed;
}
.home button:focus{
  transform: scale(0.9);
}
.error{
  color: #c71d1d;
}
</style>
