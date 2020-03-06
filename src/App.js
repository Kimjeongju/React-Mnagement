import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '김정주',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '홍길동',
  'birthday': '930321',
  'gender': '남자',
  'job': '프로그래머'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '감자',
  'birthday': '970421',
  'gender': '남자',
  'job': '농부'
}
]

class App extends Component {
  render(){
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );  
  }
}

export default App;
