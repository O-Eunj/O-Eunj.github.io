# 오은지 · 펌웨어 포트폴리오

GitHub Pages용 정적 웹사이트입니다. 빌드나 npm 설치 없이 동작합니다.

포트폴리오 웹사이트: [https://o-eunj.github.io/](https://o-eunj.github.io/)

## 구성

| 순서 | 프로젝트 | 분량 |
|---|---|---|
| 1 | STM32F411 기반 주행로봇 펌웨어 | 3장 |
| 2 | 안내견 로봇 | 2장 |
| 3 | RC Car with Joystick | 2장 |
| 4 | PLC 미니프로젝트 | 1장 |

첫 장에 자기소개와 SYSTEM ARCHITECTURE, 둘째 장에 실제 하드웨어 구성도, 셋째 장에 담당 업무를 배치했습니다. 웹에서는 스크롤·상단 메뉴·이전/다음 버튼으로 탐색하며, 인쇄 스타일은 A4 가로 8장 기준입니다. 본문은 `index.html`, 디자인은 `style.css`에서 편집합니다.

## GitHub Pages 게시

현재 파일은 게시 전 로컬 완성본입니다. GitHub 로그인과 저장소 업로드가 필요합니다.

1. GitHub의 **O-Eunj** 계정으로 로그인합니다.
2. 공개 저장소 **O-Eunj.github.io**를 만듭니다. 같은 이름의 저장소가 있다면 기존 내용을 먼저 확인하고 병합합니다.
3. 이 폴더 안의 파일을 저장소 최상위에 업로드합니다. `portfolio` 폴더 자체를 한 단계 감싸서 올리지 않습니다. `index.html`이 저장소 루트에 있어야 합니다.
4. 저장소의 **Settings → Pages → Build and deployment → Source**에서 **Deploy from a branch**, **main / (root)**를 선택하고 저장합니다.
5. Pages에서 배포 완료를 확인합니다. 예상 주소는 `https://o-eunj.github.io/`입니다. 실제 배포 전에는 접속 가능한 주소로 간주하지 않습니다.

워크플로로 배포하려면 `.github/workflows/pages.yml`도 올리고 Pages의 Source를 **GitHub Actions**로 선택하세요. 두 방식 중 하나만 사용합니다.

웹 업로드 시 숨김 파일이 빠져도 branch 방식은 동작합니다. `index.html`, `style.css`, `app.js`, `config.js`, `assets/`는 반드시 포함합니다.

## PLC 영상 추가

`assets/`에 `plc-demo.mp4`를 넣고 `config.js`를 다음처럼 수정합니다.

```js
window.PORTFOLIO = {
  plcVideo: {
    src: 'assets/plc-demo.mp4',
    caption: '실제 수행한 작업을 한 문장으로 적어 주세요.',
    title: 'PLC 미니프로젝트 시연 영상'
  }
};
```

YouTube 공유 링크도 지원합니다. 예: `src: 'https://youtu.be/실제영상ID'`. 외부 영상은 해당 서비스에서 임베드 재생이 허용되어야 합니다. 큰 영상은 YouTube 링크를 사용하는 편이 편리합니다. 영상은 자동 재생하지 않습니다. 경로를 비워두면 ‘시연 영상 준비 중’으로 표시됩니다. 설명·제목은 실제 작업에 맞게 수정하세요.

## 로컬 미리보기

이 폴더에서:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

브라우저에서 `http://127.0.0.1:4173`에 접속합니다. `index.html`을 직접 열어도 기본 탐색과 로컬 영상은 동작합니다. 폰트는 Google Fonts를 사용하며 연결이 없으면 시스템 글꼴로 대체됩니다.

## 내용의 근거와 상태

- 주행로봇 둘째 장의 하드웨어 구성도는 사용자가 직접 구성해 제공한 원본 이미지입니다. 배선·부품 표기를 수정하지 않았으며 클릭하면 원본을 새 탭에서 볼 수 있습니다.

- 주행로봇: 제공된 Confluence의 본인 업무 기록, 로컬 `microros_test/MyApp` 문서·구현, 공개 `O-Eunj/waffle` 저장소 구조를 참고했습니다.
- 주행로봇은 사용자 확인에 따라 STM32F411RE 기준으로 소개합니다. XL430, MPU9250 IMU, 창고 적재용 리니어 모터와 FreeRTOS·micro-ROS 업무를 중심으로 구성했습니다.
- 대외 공개용으로 담당 업무와 구현 내용만 소개하며 보드 변경 이력, 진행 상황, 검증 일정은 표시하지 않습니다.
- 안내견 로봇: 사용자 역할 설명 및 제공 PDF 13~15쪽. 시연 이미지는 PDF 19쪽에서 추출했습니다. PID 피드백은 기울기이며 엔코더 RPM으로 표현하지 않았습니다.
- RC Car: 사용자 역할 설명 및 팀 GitHub README. 영상 인식, 조종기 통신 개발, LCD, 센서 전체를 본인의 성과로 표현하지 않았습니다.
- PLC: 사용자가 추후 영상을 추가할 자리만 준비했습니다. 장비 모델이나 성과를 임의로 작성하지 않았습니다.
- Confluence 링크는 접근 권한이 필요할 수 있습니다. 인증정보·내부 IP·팀 문서 원문은 포함하지 않았습니다.

## 참고 자료

- [GitHub Pages 공식 게시 안내](https://docs.github.com/en/pages/quickstart)
- [GitHub Pages 공식 워크플로 안내](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [본인 담당 업무](https://rorobot.atlassian.net/wiki/spaces/robot3/pages/3342344)
- [프로젝트 기획](https://rorobot.atlassian.net/wiki/spaces/robot3/pages/98498)
- [공개 펌웨어 저장소](https://github.com/O-Eunj/waffle)
- [RC Car 팀 저장소](https://github.com/heeyeon5877-tech/Lcd_RC_Car_With_STM32)

팀 자료의 공개 가능 범위나 프로젝트 진행 상황이 바뀌면 게시 내용을 함께 갱신하세요.
