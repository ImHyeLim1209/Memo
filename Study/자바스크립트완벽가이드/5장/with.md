# with
```
with(객체)
문장

document.forms[0].address.value
with(document.form[0]){ // 이 내부 블럭은 document.form[0]을 생략하고 접근 가능하다.
  name.value = ''; // document.form[0].name.value = ''과 동일하다.
  address.value = '';
}

```
 - 스코프 체인을 임시로 확장하기 위해 사용
 - 스코프 체인의 첫번째에 특정 객체를 추가한다.
  - 문장이 끝나면 스코프 체인을 객체를 추가하기 이전 상태로 돌려놓는다.
 - 엄격 모드에서는 사용할 수 없다.
 - 불필요한 타이핑을 줄일 수 있다.
 - 스코프 체인은 식별자를 생성할 때는 사용할 수 없으므로, with 역시, 새로운 식별자를 생성할 수 없다.
  - 새로운 프로퍼티를 추가할 수 없다.
