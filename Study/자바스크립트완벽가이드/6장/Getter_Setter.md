# Getter/Setter
- 프로퍼티의 값은 getter/setter 메서드로 대체할 수 있다.
- getter/setter 메서드로 정의된 프로퍼티는 접근자 프로퍼티(accessor property)라고 한다
  - 일반 값 프로퍼티는 데이터 프로퍼티(data property)라고 한다.

## property
```
var o = {
  // data property
  data_prop: value,
  
  // accessor property
  get accessor_prop() { return this.data_prop; }
  set accessor_prop(value) { this.data_prop = value; }
};
```

### 데이터 프로퍼티
- 일반 값 프로퍼티

### 접근자 프로퍼티
- getter/setter 메서드로 정의된 프로퍼티
- 이름이 프로퍼티 이름과 같은 하나 또는 두 개의 함수
  - `funtion` 키워드 대신  `get`/`set`을 사용한다.
  - 기존 객체 프로퍼티 정의와는 달리, 이름 뒤에 콜론을 사용하지 않는다.
- 기본적으로 쓰기 속성(writable)을 갖지 않는다.
  - getter/setter 모두 가지고 있어야 일기/쓰기 모두 가능하다.
  - getter만 갖는다면 읽기 전용 프로퍼티이다.
  - setter만 갖는다면 쓰기 전용 프로퍼티이다.
    - 읽기를 시도하면 undefined 반환
    - 데이터 프로퍼티로는 쓰기 전용 프로퍼티를 만들 수 없다.
- 호출 시, 객체의 메서드로서 호출된다.
  - this 바인딩이 인스턴스 자신이 되므로, 호출된 getter/setter 내에서 인스턴스의 프로퍼티를 `this.x`와 같이 접근 가능
- 데이터 프로퍼티 처럼 상속 가능

## getter
- 객체의 접근자 프로퍼티의 값에 접근하면, JS 엔진은 getter 메서드를 인자 없이 호출한다.
  이 때, getter 메서드 반환 값이 프로퍼티 접근 표현식의 값이 된다.

## setter
- 객체 접근자 프로퍼티 값을 변경하려고 하면(=), JS 엔진은 setter 메서드를 호출한다.
  이 때, 할당자(=) 오른쪽에 있는 값을 setter 메서드의 인자로 전달한다.
- setter의 반환 값은 무시된다.
