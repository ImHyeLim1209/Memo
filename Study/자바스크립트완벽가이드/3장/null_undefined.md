# null
  - 아무 값도 갖지 않음을 가리킨다.
  - type null === 'object'
  - 다른 프로그래밍언어에서는 null, 혹은 nil 이라고 표기한다.

# undefined
  - null 보다도 심한 부재 상태를 나타낸다.
  - 초기화되지 않은 변수, 존재하지 않는 객체 프로퍼티, 반환 값이 없는 함수의 반환값, 실 인자가 전달되지 않은 형식 인자의 값(전달되지 않은 파라미터 인자)
  - undefined 처럼 언어 차원에서 정의된 키워드가 아니라, 정의되지 않은 값으로 초기화된다.
    - ECMA3에서는 undefined는 읽고 쓸 수 있는 변수이므로 다른 값으로 설정가능했다.
    - ECMA5에서는 일기 전용이 되었다.
    - typeof undefined === 'undefined'

# null과 undefined의 관계
  - 둘 다 값이 없음을 나타낸다.
  - 둘 다 false로 판정된다.
  - 둘 다 프라퍼티와 메서드를 갖고 있지 않다.
    - .이나 []로 프라퍼티에 접근하면 TypeError가 발생한다.
  - 일치 판정
    - null == undefined -> return true
    - null === undefined -> return false
  - 쓰임
    - undefined : 예기치 않은 상황에 발생한, 오류로 인한 값의 부재 표현
    - null : 일반적인 프로그램 수준에서 예상가능한 값의 부재상황 표현
      - 프라퍼티나 인자로 값이 없음을 전달하고 싶다 = null
