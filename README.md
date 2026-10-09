# 오은지 포트폴리오

기존 GitHub Pages 사이트를 홈 + 프로젝트별 상세 페이지로 개편한 수정본입니다. 현재 공개 사이트에 자동 반영된 상태는 아닙니다.

## 파일 구성

- `index.html`: 소개, 기술 스택, 4개 프로젝트 카드
- `robot.html`: 주행로봇 3장 — 개요 / 하드웨어 / 담당 업무
- `guide.html`: 안내견 로봇 2장 — 개요 / 제어 로직
- `rc.html`: RC카 2장 — 개요 / 폐루프 속도 제어
- `plc.html`: PLC 소개 1장
- `style.css`, `portfolio.css`: 디자인과 모바일·인쇄 스타일
- `app.js`: 상세 페이지 이전·다음 이동, 인쇄, PLC 영상 표시
- `config.js`: PLC 영상 설정

설치나 빌드 없이 `index.html`을 브라우저로 열면 볼 수 있습니다. 각 프로젝트는 별도의 URL을 사용하고, 상세 안에서는 스크롤 또는 목차·이전/다음 버튼으로 2~3장을 읽습니다. 휴대폰에서는 세로로 자연스럽게 이어집니다.

## 기존 GitHub Pages에 적용

1. 기존 저장소 `O-Eunj/o-eunj.github.io`에서 새 브랜치를 만듭니다.
2. 이 폴더 **안의 파일**을 저장소 최상위에 넣습니다. 기존 `index.html`, CSS, JS, 이미지 파일은 해당 수정본으로 교체합니다. 기존 `.github`와 배포 설정은 유지합니다.
3. 변경 내용을 확인한 뒤 기존 Pages 배포 브랜치로 병합합니다.
4. GitHub의 배포 완료 후 홈에서 4개의 프로젝트 상세 페이지가 열리는지 확인합니다.

`portfolio` 폴더 자체를 감싸서 업로드하지 않습니다. 기존 저장소의 나머지 파일을 삭제할 필요는 없습니다. 새 파일 `portfolio.css`와 상세 HTML 4개도 반드시 포함합니다.

## 내용 반영 기준

- 기존 공개 포트폴리오의 개인 소개, 기술, 담당 업무, 이미지 유지.
- 사용자 확인: NUCLEO-F411RE를 TurtleBot3 MCU로 사용. XL430 제어, micro-ROS, 리니어 모터, MPU9250 담당.
- 사용자 확인: 안내견 PID 목표값은 처음 손잡이를 잡았을 때 캘리브레이션한 각도. 현재 각도의 기준 대비 오차를 입력으로 사용하고 PWM 출력. 장애물 시 AI 명령 우선, 해소 후 사용자 제어 복귀.
- 안내견 발표 PDF 13~15쪽: 모드 전환, UART F/S/L/R, Anti-Windup, 출력 제한, 모터 믹싱.
- RC카는 사용자 설명과 팀 저장소에 근거한 엔코더 RPM 기반 속도 제어. 다른 팀원의 센서·LCD·조종기 개발을 개인 성과로 기재하지 않음.
- Confluence의 주행로봇 문서에는 향후 설계안도 포함되어 있으므로 해당 계획을 완료 성과로 추가하지 않음.
- PLC는 상세 자료가 없어 간단한 소개와 영상 준비 영역만 유지.
- 프로젝트 기간·성과 수치·이메일·학력 등 제공되지 않은 내용은 추가하지 않음.

## 자료

- 기존 포트폴리오: https://o-eunj.github.io/
- 팀 프로젝트: https://rorobot.atlassian.net/wiki/spaces/robot3/overview
- 담당 업무: https://rorobot.atlassian.net/wiki/spaces/robot3/pages/3342344
- 공정 시뮬레이션: https://pjongb.github.io/7s_FA-SIMULATION/
- RC카: https://github.com/heeyeon5877-tech/Lcd_RC_Car_With_STM32

## PLC 영상 추가

동영상 파일을 폴더에 넣고 `config.js`의 `plcVideo.src`에 경로를 적습니다. 예: `plc-demo.mp4`. YouTube 공유 링크도 지원합니다. 영상이 없으면 준비 중 화면이 표시됩니다.

## 2026-10-06 홈 화면 개편
프로필 사진(profile.jpg)과 간결한 소개, 기술 스택, 2×2 프로젝트 카드로 구성했습니다. home.css는 홈 전용 스타일입니다. 1280×720, 1366×768, 1920×900 브라우저 화면에서 세로 스크롤 없이 전체가 보이는 것을 확인했습니다. 작은 모바일 화면에서는 가독성을 위해 세로로 배치됩니다. 업로드 시 home.css와 profile.jpg도 포함하세요.


## RC Car 사진 및 코드 설명 추가
RC Car 상세는 3장(개요·실물 사진 / 제어 로직 / 직접 작성한 코드)입니다. rc.css, rc-car.png, rc-joystick.png를 함께 업로드하세요. 첨부한 네 C 소스의 구현을 기준으로 설명했고, 원본 소스 파일은 배포 파일에 포함하지 않았습니다.

