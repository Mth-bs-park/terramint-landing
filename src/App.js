import React, { Component } from 'react';

import Navigation from './components/navigation/Navigation';

import Banner from './components/section/banner/Banner';
import Cards from './components/section/personal/Cards';
import Company from './components/section/company/Company';
import Subscribe from './components/section/subscribe/Subscribe';

import './App.css';
import $ from 'jquery';

class App extends Component {

  constructor() {
    super();
    this.items = this.initText();
    // this.onClick = this.onClick.bind(this);
  }

  render() {

    return (
      <div>
        <Navigation />
        <div className="app-wrap">
          <Banner items={this.items.banner}/>
          <Cards items={this.items.personal}/>
          <Company items={this.items.company}/>
          <Subscribe items={this.items.subscribe} />
        </div>
      </div>
    );
  }

  initText() {
    return {
      banner: {
        shortDesc: '부동산 투자의 혁신',
        title: '건물주가 되어보세요',
        desc: `건물을 통채로 살 수 없다면 작은 지분으로 시작해볼까요? 건물에서 발생하는 수익을 챙겨보세요.
        잠들지 않는 거래소에서 지분을 쉽고 빠르게 사고 팔 수 있습니다.`,
        btnText: '더 알아보기'
      },
      personal: {
        title: '개인투자자',
        items: [
          {
            img: '/assets/img/cardIcon1.png',
            title: '억! 소리나는 빌딩',
            desc: '부동산 투자의 진입장벽을 낮춰 소액투자자에게 안정적인 수익의 기회를 열어줍니다.'
          },
          {
            img: '/assets/img/cardIcon2.png',
            title: '내 돈은 내 맘대로!',
            desc: '손쉽게 현금화 할 수 없었던 부동산 자산. 복잡한 절차와 비용없이 주식처럼 거래해보세요. 경제적 상황에 알맞게 유동성있는 자금관리가 가능합니다.'
          },
          {
            img: '/assets/img/cardIcon1.png',
            title: '투명한 정보',
            desc: '블록체인에서 관리되는 투명한 정보를 활용해 보다 정확하고 현명한 부동산투자를 할 수 있습니다.'
          },
          {
            img: '/assets/img/cardIcon2.png',
            title: '안정적인 수익률',
            desc: '실물자산의 안정성과 평균 6%의 부동산 수익률을 누릴 수 습니다.'
          }
        ],
        btnText: '더 알아보기'
      },
      company: {
        title: '자산관리 회사:',
        items: [
          {
            title: '새로운 자본',
            desc: '다양하고 많은 투자자로부터 자본을 모아'
          },
          {
            title: '투명한 자금 관리',
            desc: `보고서를 위한 보고서가 아닌 배당금의 분배, 건물당 수익률이
            별도의 노력없이 자동으로 처리되고 기록됩니다.`
          },
          {
            title: '억! 소리나는 빌딩',
            desc: `실시간으로 일어나는 부동산 거래정보로 부터 보다 정확하고
            가치있는 부동산의 감정평가를 할 수 있습니다.`
          },
          {
            title: '자동 결제',
            desc: `지분에 알맞게 약속된 시간에 정확하고 빠르게 자동으로
            처리됩니다.`
          }
        ],
        btnText: '더 알아보기'
      },
      subscribe: {
        title: '테라민트의 한걸음 한걸음을 지켜봐주세요.',
        desc: `테라민트는 대한민국은 물론 동아시아를 발판으로, 세계로 나아가는 것을 목표로 하고 있습니다.
        이메일로 뉴스레터를 받아보세요.`,
        placeholder: '이메일을 입력해주세요.',
        btnText: '뉴스 받아보기'
      }

    };
  }

  // onClick(e) {
  //   const nativeEvent = e.nativeEvent;
  //   const target = nativeEvent.target;
  //   const $target = $(target);
  //   const withInput = Boolean($target.attr('data-withinput'));
  //
  //   console.log(withInput);
  //   if (withInput) {
  //     const $input = $target.prev();
  //     const email = $input.val();
  //     const isEmail = this._validateEmail(email);
  //
  //     if (!isEmail) {
  //       console.log('none email form');
  //       return;
  //     }
  //     console.log('input value:', email);
  //   }
  //   else {
  //     console.log('open modal');
  //   }
  // }
  //
  // _validateEmail(email) {
  //   const regExp = new RegExp('/^\S+@\S+\.\S+$/');
  //   return regExp.test(email);
  // }
}


export default App;
