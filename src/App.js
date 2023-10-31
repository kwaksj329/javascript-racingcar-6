import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    const inputCar = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const inputNumber = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    Console.print('실행 결과');

    const racingCarList = inputCar.split(',');
    const distanceList = Array.from({length: racingCarList.length}, () => 0);
    for(let i = 0 ; i < inputNumber ; i++){
      racingCarList.forEach((carName, index) => {
        if(Random.pickNumberInRange(1, 9) >= 4){
          distanceList[index]++;
          Console.print(`${carName} : ${"-".repeat(distanceList[index])}`)
        }
      })
    }
    const maxDistance = Math.max(...distanceList);
    const winnerCarList = racingCarList.reduce((acc, carName, index) => {
      if(distanceList[index] === maxDistance){
        acc.push(carName);
      }
      return acc
    }, [])
    if(winnerCarList.length === 1){
      Console.print(`최종 우승자 : ${winnerCarList[0]}`)
    }else{
      Console.print(`최종 우승자 : ${winnerCarList.join(', ')}`)
    }
  }

}

export default App;
