# 메모 최소 길이 2자

상태: 구현·로컬 검증 완료(test·build·로컬 서버+클라우드 DB 직접 API). main 푸시로 재배포 요청(미션18). 배포 반영·공개 API·휴대폰 화면은 미확인.

[PRD](PRD.md) → [스펙](specs/behavior.md) → [검증](verification.md) → [회고](retrospective.md).

변경: apps/server/rules.js, apps/web/src/rules.js(RULES 2~20, RELEASE `003-min-length`), apps/server/tests/validation.test.js(경계 테스트 추가). DB 구조 변경 없음 → 마이그레이션 없음. 002(최대 20자, 8b1c645) 위에 최소 2자를 더했고, 002 테스트의 "1자 성공" 단언은 최소값 성공으로 바꿨다.

다음 일: 배포 서버 `/health`의 release·commit 확인 → 공개 API로 같은 경계 검사 → 휴대폰 화면 확인 → verification.md에 커밋·시각 기록 → 회고 작성.
