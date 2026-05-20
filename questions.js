/** 한능검 OX 퀴즈 문항 200선 (answer: true = O, false = X) */
const CATEGORY_LABELS = {
  prehistoric: "선사·고대",
  medieval: "중세 (고려)",
  "early-modern": "근세 (조선)",
  modern: "근·현대",
  culture: "문화·사상",
};

const QUIZ_QUESTIONS = [
  // [선사·고대]
  { id: 1, category: "prehistoric", categoryLabel: "선사·고대", text: "구석기 시대 사람들은 동굴이나 바위 그늘, 막집에서 거주하였다.", answer: true, explanation: "구석기 시대에는 이동 생활을 주로 하였기 때문에 짓기 쉬운 막집이나 동굴에서 생활했습니다." },
  { id: 2, category: "prehistoric", categoryLabel: "선사·고대", text: "신석기 시대에는 반달 돌칼을 사용하여 벼를 수확하였다.", answer: false, explanation: "반달 돌칼은 청동기 시대의 대표적인 농기구입니다. 신석기 시대에는 간석기를 사용했으나 벼농사는 아직 시작되지 않았습니다." },
  { id: 3, category: "prehistoric", categoryLabel: "선사·고대", text: "신석기 시대에는 빗살무늬 토기를 만들어 식량을 저장하였다.", answer: true, explanation: "빗살무늬 토기는 신석기 시대의 대표적인 토기로, 도토리 등 채집물이나 식량을 저장하는 데 쓰였습니다." },
  { id: 4, category: "prehistoric", categoryLabel: "선사·고대", text: "고조선은 8조법을 통해 사유 재산을 보호하고 형벌을 엄격히 적용했다.", answer: true, explanation: "고조선의 8조법(살인, 상해, 절도 등)을 통해 당시 사회가 계급 사회이자 사유 재산을 중시했음을 알 수 있습니다." },
  { id: 5, category: "prehistoric", categoryLabel: "선사·고대", text: "부여에는 10월에 '무천'이라는 제천 행사를 여는 풍습이 있었다.", answer: false, explanation: "무천은 동예의 제천 행사입니다. 부여의 제천 행사는 12월에 열린 '영고'입니다." },
  { id: 6, category: "prehistoric", categoryLabel: "선사·고대", text: "고구려는 혼인 풍습으로 신부 집 뒤에 작은 집을 짓고 사는 서옥제가 있었다.", answer: true, explanation: "고구려의 서옥제는 일종의 데릴사위제로, 남자가 여자 집에 머물다 자식이 크면 남자 집으로 돌아가는 풍습입니다." },
  { id: 7, category: "prehistoric", categoryLabel: "선사·고대", text: "옥저에는 가족의 뼈를 추려 한 목곽에 안치하는 가족 공동 무덤(골장제) 풍습이 있었다.", answer: true, explanation: "옥저의 대표적인 풍습으로 가족 공동 묘제(골장제)와 민며느리제가 있습니다." },
  { id: 8, category: "prehistoric", categoryLabel: "선사·고대", text: "삼한에는 제사장인 천군이 다스리는 신성 구역인 소도가 존재하였다.", answer: true, explanation: "소도는 제정 분리 사회였던 삼한의 특징을 잘 보여주는 신성 지역으로, 죄인이라도 도망쳐 오면 잡아가지 못했습니다." },
  { id: 9, category: "prehistoric", categoryLabel: "선사·고대", text: "고구려 소수림왕은 평양으로 도읍을 옮기고 적극적인 남진 정책을 추진하였다.", answer: false, explanation: "평양 천도와 남진 정책을 추진한 왕은 장수왕입니다. 소수림왕은 율령 반포, 태학 설립, 불교 수용을 통해 체제를 정비했습니다." },
  { id: 10, category: "prehistoric", categoryLabel: "선사·고대", text: "백제 근초고왕은 마한의 남은 세력을 복속하고 고구려의 평양성을 공격하였다.", answer: true, explanation: "근초고왕은 백제의 전성기를 이끈 왕으로, 고구려 고국원왕을 전사시키고 해상으로 진출했습니다." },
  { id: 11, category: "prehistoric", categoryLabel: "선사·고대", text: "백제 무령왕은 지방 22담로에 왕족을 파견하여 지방 통제를 강화하였다.", answer: true, explanation: "무령왕은 웅진 시대의 왕으로 22담로를 설치하여 왕권을 강화하고 백제를 부흥시켰습니다." },
  { id: 12, category: "prehistoric", categoryLabel: "선사·고대", text: "신라 지증왕은 국호를 '신라'로 확정하고 최고 지배자의 칭호를 '마립간'으로 정하였다.", answer: false, explanation: "지증왕은 국호를 신라로 정하고 칭호를 '마립간'에서 중국식인 '왕'으로 변경했습니다." },
  { id: 13, category: "prehistoric", categoryLabel: "선사·고대", text: "신라 법흥왕은 불교를 공인하고 금관가야를 병합하였다.", answer: true, explanation: "법흥왕은 이차돈의 순교를 계기로 불교를 공인하고, 금관가야를 병합하여 영토를 확장했습니다." },
  { id: 14, category: "prehistoric", categoryLabel: "선사·고대", text: "신라 진흥왕은 화랑도를 국가적인 조직으로 개편하였다.", answer: true, explanation: "진흥왕은 인재 양성을 위해 화랑도를 국가 조직으로 정비하고 영토 확장(한강 유역 장악)의 주역으로 삼았습니다." },
  { id: 15, category: "prehistoric", categoryLabel: "선사·고대", text: "금관가야는 질 좋은 철이 많이 생산되어 낙랑과 왜에 철을 수출하였다.", answer: true, explanation: "가야(특히 금관가야)는 철의 나라로 불리며, 덩이쇠를 화폐처럼 사용하고 활발한 해상 교역을 했습니다." },
  { id: 16, category: "prehistoric", categoryLabel: "선사·고대", text: "고구려 을지문덕은 안시성 전투에서 당나라 군대를 크게 물리쳤다.", answer: false, explanation: "을지문덕은 살수대첩(612)에서 수나라 군대를 물리쳤습니다. 안시성 전투(645)는 당나라의 침입을 막아낸 전투입니다." },
  { id: 17, category: "prehistoric", categoryLabel: "선사·고대", text: "신라는 나·당 연합군을 결성하여 백제와 고구려를 차례로 멸망시켰다.", answer: true, explanation: "김춘추의 외교로 나·당 연맹이 체결되었고, 660년 백제, 668년 고구려를 차례로 멸망시켰습니다." },
  { id: 18, category: "prehistoric", categoryLabel: "선사·고대", text: "통일 신라 신문왕은 귀족들에게 녹읍을 다시 지급하여 왕권을 약화시켰다.", answer: false, explanation: "신문왕은 전제 왕권을 강화하기 위해 관료전을 지급하고 귀족의 경제적 기반인 녹읍을 폐지했습니다. (이후 경덕왕 때 부활)" },
  { id: 19, category: "prehistoric", categoryLabel: "선사·고대", text: "통일 신라 원성왕은 유교 경전의 이해 수준을 평가하여 관리를 등용하는 독서삼품과를 실시했다.", answer: true, explanation: "독서삼품과는 골품제의 한계로 큰 성과를 거두지 못했으나, 학벌(유교적 소양)을 중시하는 제도로서 의의가 있습니다." },
  { id: 20, category: "prehistoric", categoryLabel: "선사·고대", text: "신라 하대에는 호족들이 선종 불교와 풍수지리설을 사상적 기반으로 삼아 성장하였다.", answer: true, explanation: "지방에서 독자적인 세력으로 성장한 호족은 교종 대신 선종 불교와 풍수지리설을 후원하며 신라 정부에 대항했습니다." },
  { id: 21, category: "prehistoric", categoryLabel: "선사·고대", text: "장보고는 완도에 청해진을 설치하고 동아시아 해상 무역을 장악하였다.", answer: true, explanation: "장보고는 신라 하대에 청해진을 거점으로 해적을 소탕하고 당, 신라, 일본을 잇는 해상 교역을 주도했습니다." },
  { id: 22, category: "prehistoric", categoryLabel: "선사·고대", text: "대조영은 고구려 유민과 말갈족을 이끌고 동모산에서 발해를 건국하였다.", answer: true, explanation: "고구려가 멸망한 후, 대조영은 698년 동모산 일대에서 발해(초기 국호 진)를 건국했습니다." },
  { id: 23, category: "prehistoric", categoryLabel: "선사·고대", text: "발해 무왕은 당나라와 친선 관계를 맺고 3성 6부 제도를 수용하였다.", answer: false, explanation: "당나라와 친선 관계를 맺고 제도를 수용한 것은 문왕입니다. 무왕은 당의 등주(산둥)를 선제 공격하는 등 적대적이었습니다." },
  { id: 24, category: "prehistoric", categoryLabel: "선사·고대", text: "발해 선왕 때는 대부분의 말갈족을 복속시키고 최대 영토를 확보하여 '해동성국'이라 불렸다.", answer: true, explanation: "선왕은 발해의 전성기를 이끈 왕으로, 거란과 신라와 국경을 접할 정도로 영토를 크게 넓혔습니다." },
  { id: 25, category: "prehistoric", categoryLabel: "선사·고대", text: "발해의 최고 유교 교육 기관은 태학이었다.", answer: false, explanation: "발해의 교육 기관은 주자감입니다. 태학은 고구려 소수림왕 때 설립된 교육 기관입니다." },

  // [중세 (고려)]
  { id: 26, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 태조 왕건은 호족을 통제하기 위해 기인 제도와 사심관 제도를 실시하였다.", answer: true, explanation: "기인 제도는 호족의 자제를 개경에 머물게 한 것이고, 사심관 제도는 지방 출신 고관에게 그 지역의 통제를 맡긴 제도입니다." },
  { id: 27, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 광종은 노비안검법을 실시하여 호족의 군사적·경제적 기반을 약화시켰다.", answer: true, explanation: "억울하게 노비가 된 자를 양인으로 풀어주어 국가 재정을 늘리고 호족의 세력을 크게 약화시켰습니다." },
  { id: 28, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 성종은 최승로의 시무 28조를 받아들여 12목에 처음으로 지방관을 파견했다.", answer: true, explanation: "성종은 유교 정치 이념을 바탕으로 통치 체제를 정비하고 중앙 집권화를 꾀했습니다." },
  { id: 29, category: "medieval", categoryLabel: "중세 (고려)", text: "고려의 전시과 제도는 전·현직 관리 모두에게 직역의 대가로 수조권을 지급하는 제도였다.", answer: false, explanation: "초기(시정, 개정)에는 전·현직에게 지급했으나, 나중(경정 전시과)에는 토지가 부족해져 현직 관리에게만 지급했습니다." },
  { id: 30, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 시대에는 거주 이전의 자유가 없는 향, 부곡, 소라는 특수 행정 구역이 존재했다.", answer: true, explanation: "이곳 주민들은 양인이었으나 일반 군현민보다 세금 부담이 크고 과거 응시 등에서 차별을 받았습니다." },
  { id: 31, category: "medieval", categoryLabel: "중세 (고려)", text: "거란의 1차 침입 때 서희는 외교 담판을 통해 강동 6주를 획득하였다.", answer: true, explanation: "서희는 고려가 고구려를 계승했음을 주장하며 송과의 관계 단절을 약속하는 조건으로 피 흘리지 않고 영토를 확장했습니다." },
  { id: 32, category: "medieval", categoryLabel: "중세 (고려)", text: "윤관은 거란을 정벌하기 위해 신기군, 신보군, 항마군으로 구성된 별무반을 편성하였다.", answer: false, explanation: "별무반은 거란이 아니라 '여진족'의 기병에 맞서기 위해 편성된 특수 부대입니다." },
  { id: 33, category: "medieval", categoryLabel: "중세 (고려)", text: "이자겸은 금나라의 사대(군신 관계) 요구를 거절하고 북진 정책을 강력히 추진하였다.", answer: false, explanation: "이자겸과 보수 문벌 귀족들은 자신의 권력 유지를 위해 금의 사대 요구를 수용(굴복)했습니다." },
  { id: 34, category: "medieval", categoryLabel: "중세 (고려)", text: "묘청은 서경으로 도읍을 옮기고 금나라를 정벌하자며 서경 천도 운동을 일으켰다.", answer: true, explanation: "풍수지리설을 내세운 묘청 등은 서경(평양) 천도와 칭제건원을 주장했으나 김부식 관군에 진압되었습니다." },
  { id: 35, category: "medieval", categoryLabel: "중세 (고려)", text: "최충헌은 정방을 설치하여 모든 관직에 대한 인사권을 장악하였다.", answer: false, explanation: "정방을 설치하여 인사권을 장악한 사람은 최충헌의 아들인 '최우'입니다. 최충헌은 교정도감을 설치했습니다." },
  { id: 36, category: "medieval", categoryLabel: "중세 (고려)", text: "최씨 무신 정권 시기 만적은 개경에서 신분 해방을 부르짖으며 반란을 모의하였다.", answer: true, explanation: "최충헌의 사노비였던 만적은 '왕후장상의 씨가 따로 있겠는가'라며 노비 해방을 도모했습니다." },
  { id: 37, category: "medieval", categoryLabel: "중세 (고려)", text: "몽골 침입 당시 최우 정권은 강화도로 천도하여 항전을 준비하였다.", answer: true, explanation: "몽골의 수전에 약한 점을 이용해 강화도로 천도하고 장기 항전에 돌입했습니다." },
  { id: 38, category: "medieval", categoryLabel: "중세 (고려)", text: "삼별초는 몽골과 강화를 맺고 개경으로 환도하는 데 앞장섰다.", answer: false, explanation: "삼별초(배중손 등)는 개경 환도에 반대하며 강화도, 진도, 제주도로 근거지를 옮겨가며 끝까지 몽골에 항전했습니다." },
  { id: 39, category: "medieval", categoryLabel: "중세 (고려)", text: "원 간섭기에는 고려 왕의 묘호에 '충(忠)'자를 붙여야 했고 관제도 격하되었다.", answer: true, explanation: "원의 부마국(사위의 나라)이 되면서 고려는 자주성에 큰 타격을 입고 내정 간섭을 받았습니다." },
  { id: 40, category: "medieval", categoryLabel: "중세 (고려)", text: "공민왕은 무력으로 쌍성총관부를 공격하여 철령 이북의 영토를 수복하였다.", answer: true, explanation: "공민왕은 반원 자주 정책의 일환으로 기철 등 친원파를 숙청하고 영토를 되찾았습니다." },
  { id: 41, category: "medieval", categoryLabel: "중세 (고려)", text: "공민왕은 신돈을 등용하고 전민변정도감을 설치하여 불법으로 빼앗긴 토지와 노비를 본래대로 돌려놓았다.", answer: true, explanation: "권문세족의 경제적 기반을 약화시키고 국가 재정을 확충하기 위한 중요한 개혁이었습니다." },
  { id: 42, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 말 신진 사대부는 주로 양명학을 사상적 기반으로 삼아 사회 모순을 개혁하려 하였다.", answer: false, explanation: "신진 사대부의 학문적, 사상적 기반은 안향이 소개한 '성리학'이었습니다." },
  { id: 43, category: "medieval", categoryLabel: "중세 (고려)", text: "최무선은 화통도감을 설치하고 화포를 제작하여 진포 해전에서 왜구를 크게 격퇴하였다.", answer: true, explanation: "고려 말 왜구의 잦은 침입을 막기 위해 우리나라 역사상 최초로 대규모 화포를 사용한 해전입니다." },
  { id: 44, category: "medieval", categoryLabel: "중세 (고려)", text: "이성계는 요동 정벌을 위해 출병했다가 위화도에서 회군하여 군사·정치적 실권을 장악했다.", answer: true, explanation: "위화도 회군(1388)을 계기로 신흥 무인 세력과 신진 사대부가 권력을 쥐고 조선 건국의 발판을 마련했습니다." },
  { id: 45, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 시대의 대표적 무역항은 벽란도로, 아라비아 상인들도 왕래하였다.", answer: true, explanation: "예성강 어귀의 벽란도는 국제 무역항으로 번성했으며, 이때 서방에 '코리아'라는 이름이 알려졌습니다." },

  // [근세 (조선)]
  { id: 46, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선을 건국한 태조 이성계는 국호를 조선으로 정하고 한양으로 도읍을 옮겼다.", answer: true, explanation: "1392년 건국 후, 풍수지리적 이점과 교통의 편리함 등을 고려해 한양(한성)으로 천도했습니다." },
  { id: 47, category: "early-modern", categoryLabel: "근세 (조선)", text: "태종은 의정부 서사제를 실시하여 재상들의 권한을 크게 강화시켰다.", answer: false, explanation: "태종은 6조에서 왕에게 직접 보고하게 하는 '6조 직계제'를 실시하여 국왕의 권력을 크게 강화했습니다." },
  { id: 48, category: "early-modern", categoryLabel: "근세 (조선)", text: "태종은 16세 이상의 남성에게 호패를 차고 다니게 하는 호패법을 실시하였다.", answer: true, explanation: "호패법은 인구를 정확히 파악하여 조세 징수와 군역 부과를 원활하게 하기 위한 제도였습니다." },
  { id: 49, category: "early-modern", categoryLabel: "근세 (조선)", text: "세종은 압록강과 두만강 유역에 4군 6진을 개척하여 오늘날의 국경선을 확정하였다.", answer: true, explanation: "북방의 여진족을 몰아내고 영토를 확장한 세종의 대표적인 대외 정책입니다." },
  { id: 50, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선의 기본 법전인 '경국대전'은 세조 때 편찬이 시작되어 성종 때 완성되었다.", answer: true, explanation: "경국대전 완성으로 조선은 유교적 통치 규범과 법치 체제를 확립하게 되었습니다." },
  { id: 51, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선 중기 조광조는 현량과 실시, 소격서 폐지 등 급진적인 도학 정치를 추진하였다.", answer: true, explanation: "사림파인 조광조의 개혁은 훈구파의 반발을 사 기묘사화(1519)가 일어나는 원인이 되었습니다." },
  { id: 52, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선의 지방 행정은 전국을 8도로 나누고 모든 군현에 수령을 파견하였다.", answer: true, explanation: "고려 시대와 달리 조선은 속현을 없애고 모든 군현에 수령을 파견하여 중앙 집권 체제를 완성했습니다." },
  { id: 53, category: "early-modern", categoryLabel: "근세 (조선)", text: "선조 때 일어난 임진왜란에서 이순신은 한산도 대첩에서 학익진 전법으로 일본 수군을 격파했다.", answer: true, explanation: "이순신의 활약으로 조선은 남해의 제해권을 장악하고 일본의 수륙 병진 계획을 좌절시켰습니다." },
  { id: 54, category: "early-modern", categoryLabel: "근세 (조선)", text: "광해군은 임진왜란 직후 명나라와 후금 사이에서 중립 외교를 펼쳤다.", answer: true, explanation: "광해군은 쇠퇴하는 명과 신흥 강국 후금 사이에서 실리적인 외교 정책을 통해 전쟁을 피하려 했습니다." },
  { id: 55, category: "early-modern", categoryLabel: "근세 (조선)", text: "인조반정으로 집권한 서인 세력은 친명배금 정책을 추진하여 정묘호란의 원인이 되었다.", answer: true, explanation: "광해군을 몰아낸 서인들은 명을 가까이하고 후금을 배척하여 후금(청)의 침입을 초래했습니다." },
  { id: 56, category: "early-modern", categoryLabel: "근세 (조선)", text: "병자호란 당시 조선은 남한산성에서 항전하였으나 끝내 삼전도에서 청에 항복하였다.", answer: true, explanation: "청태종의 침입으로 발발한 병자호란(1636)에서 인조는 '삼전도의 굴욕'을 겪고 군신 관계를 맺었습니다." },
  { id: 57, category: "early-modern", categoryLabel: "근세 (조선)", text: "효종은 청나라를 정벌하여 병자호란의 치욕을 씻고자 북학 운동을 강력히 추진하였다.", answer: false, explanation: "효종이 추진한 것은 청을 정벌하자는 '북벌 운동'입니다. 북학 운동은 18세기 후반 청의 선진 문물을 수용하자는 실학자들의 주장입니다." },
  { id: 58, category: "early-modern", categoryLabel: "근세 (조선)", text: "영조는 붕당의 대립을 완화하기 위해 탕평비를 건립하고 탕평책을 실시하였다.", answer: true, explanation: "영조는 왕권 강화와 정국 안정을 위해 온건한 세력을 고루 등용하는 완론 탕평을 펼쳤습니다." },
  { id: 59, category: "early-modern", categoryLabel: "근세 (조선)", text: "영조는 백성들의 군역 부담을 줄여주기 위해 1년에 2필 내던 군포를 1필로 줄이는 균역법을 시행했다.", answer: true, explanation: "균역법 시행에 따른 재정 부족분은 결작(지주 부과), 선무군관포, 어장세 등으로 보충했습니다." },
  { id: 60, category: "early-modern", categoryLabel: "근세 (조선)", text: "정조는 왕실 도서관인 규장각을 국왕의 권력과 정책을 뒷받침하는 핵심 정치 기구로 육성하였다.", answer: true, explanation: "정조는 규장각을 통해 젊은 인재를 양성(초계문신제)하고 개혁 정치를 주도했습니다." },
  { id: 61, category: "early-modern", categoryLabel: "근세 (조선)", text: "정조는 수원에 화성을 축조하여 군사적·상업적 기능을 갖춘 새로운 정치 도시로 육성하고자 했다.", answer: true, explanation: "정약용의 거중기 등을 활용하여 지은 수원 화성은 정조의 개혁 의지가 담긴 신도시입니다." },
  { id: 62, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선 후기에는 모내기법(이앙법)이 전국으로 확대되면서 벼와 보리의 이모작이 가능해졌다.", answer: true, explanation: "노동력이 절감되고 수확량이 늘어나면서 농민들 중 일부는 부농으로 성장할 수 있었습니다." },
  { id: 63, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선 후기에는 상업이 발달하면서 건원중보가 전국적으로 유통되었다.", answer: false, explanation: "건원중보는 고려 성종 때의 화폐입니다. 조선 후기에 전국적으로 유통된 화폐는 '상평통보'입니다." },
  { id: 64, category: "early-modern", categoryLabel: "근세 (조선)", text: "19세기 세도 정치기에는 매관매직과 삼정의 문란이 극심하여 농민들의 생활이 크게 피폐해졌다.", answer: true, explanation: "특정 가문(안동 김씨, 풍양 조씨)이 권력을 독점하면서 부정부패가 만연했습니다." },
  { id: 65, category: "early-modern", categoryLabel: "근세 (조선)", text: "세도 정치기의 혼란 속에서 평안도 지역에 대한 차별에 반발하여 홍경래의 난이 일어났다.", answer: true, explanation: "1811년 일어난 홍경래의 난은 몰락 양반과 농민, 광산 노동자 등이 합세한 대규모 봉기입니다." },

  // [근·현대]
  { id: 66, category: "modern", categoryLabel: "근·현대", text: "흥선대원군은 왕권 강화를 위해 임진왜란 때 불탄 경복궁을 중건하였다.", answer: true, explanation: "경복궁 중건 과정에서 원납전 징수와 당백전 발행 등으로 백성들의 큰 원성을 샀습니다." },
  { id: 67, category: "modern", categoryLabel: "근·현대", text: "흥선대원군은 전국 곳곳에 척화비를 세워 서양과의 통상 수교를 강력히 거부하겠다는 의지를 밝혔다.", answer: true, explanation: "병인양요(1866)와 신미양요(1871)를 물리친 후, 서양 열강의 침략을 배척하기 위해 세웠습니다." },
  { id: 68, category: "modern", categoryLabel: "근·현대", text: "운요호 사건을 계기로 체결된 강화도 조약은 우리나라 최초의 근대적 조약이자 평등 조약이다.", answer: false, explanation: "최초의 근대적 조약은 맞으나, 치외법권(해안 측량권 등)이 포함된 불평등 조약이었습니다." },
  { id: 69, category: "modern", categoryLabel: "근·현대", text: "임오군란(1882)은 신식 군대인 별기군에 비해 차별 대우를 받던 구식 군인들이 일으킨 봉기이다.", answer: true, explanation: "임오군란을 계기로 청나라 군대가 조선에 주둔하게 되었고 청의 내정 간섭이 심해졌습니다." },
  { id: 70, category: "modern", categoryLabel: "근·현대", text: "갑신정변(1884)은 급진 개화파가 우정총국 개국 축하연을 이용하여 일으킨 근대적 국가 건설 운동이다.", answer: true, explanation: "김옥균 등은 청의 간섭을 배제하고 일본의 메이지 유신을 모델로 개혁하려 했으나 3일 만에 실패했습니다." },
  { id: 71, category: "modern", categoryLabel: "근·현대", text: "동학 농민 운동 때 농민군은 전주성 점령 후 정부와 전주 화약을 맺고 집강소를 설치하여 폐정 개혁을 추진했다.", answer: true, explanation: "농민군이 자치적으로 설치한 집강소에서 신분제 타파 등 사회 개혁을 실천하고자 했습니다." },
  { id: 72, category: "modern", categoryLabel: "근·현대", text: "갑오개혁(1894)을 통해 법적으로 신분제가 폐지되고 과부의 재가가 허용되었다.", answer: true, explanation: "오랜 악습이었던 신분제와 연좌제가 폐지되는 등 근대적 평등 사회로 나아가는 계기가 되었습니다." },
  { id: 73, category: "modern", categoryLabel: "근·현대", text: "고종은 명성황후가 시해된 을미사변 이후 신변의 위협을 느껴 러시아 공사관으로 거처를 옮겼다(아관파천).", answer: true, explanation: "1896년 아관파천으로 인해 조선에 대한 러시아의 영향력이 커지고 서구 열강의 이권 침탈이 심화되었습니다." },
  { id: 74, category: "modern", categoryLabel: "근·현대", text: "독립협회는 만민 공동회를 개최하여 러시아의 내정 간섭과 이권 요구를 규탄하였다.", answer: true, explanation: "서재필 등이 주도한 독립협회는 민중 계몽과 자주독립, 자유 민주주의 운동을 전개했습니다." },
  { id: 75, category: "modern", categoryLabel: "근·현대", text: "대한제국은 '구본신참'을 원칙으로 삼아 토지 조사 사업인 양전 사업을 실시하고 지계를 발급하였다.", answer: true, explanation: "광무개혁의 일환으로 근대적 토지 소유권을 확립하기 위한 조치였습니다." },
  { id: 76, category: "modern", categoryLabel: "근·현대", text: "1905년 일제는 대한제국의 군대를 강제 해산시키는 을사늑약을 강요하였다.", answer: false, explanation: "을사늑약은 대한제국의 '외교권'을 박탈하고 통감부를 설치한 조약입니다. 군대 해산은 1907년 정미7조약(한일신협약) 때의 일입니다." },
  { id: 77, category: "modern", categoryLabel: "근·현대", text: "일제는 1910년대에 헌병 경찰을 앞세운 무단 통치를 실시하고 토지 조사 사업을 강행하였다.", answer: true, explanation: "헌병이 경찰 업무를 맡아 조선인을 억압하고, 기한부 신고제인 토지 조사 사업으로 많은 농민이 토지를 잃었습니다." },
  { id: 78, category: "modern", categoryLabel: "근·현대", text: "1919년 3·1 운동은 윌슨의 민족 자결주의에 영향을 받아 일어난 전국적인 만세 운동이다.", answer: true, explanation: "이 운동을 계기로 일제는 통치 방식을 문화 통치로 바꾸었고, 대한민국 임시 정부가 수립되었습니다." },
  { id: 79, category: "modern", categoryLabel: "근·현대", text: "1920년대 일제는 산미 증식 계획을 통해 조선의 식량 생산을 늘려 조선 농민의 삶을 풍요롭게 했다.", answer: false, explanation: "산미 증식 계획으로 생산량은 늘었으나, 일제가 그 이상으로 쌀을 수탈해 가면서 조선의 식량 사정은 오히려 악화되었습니다." },
  { id: 80, category: "modern", categoryLabel: "근·현대", text: "1927년 창립된 신간회는 민족주의 진영과 사회주의 진영이 연합하여 만든 최대 규모의 합법적 항일 단체이다.", answer: true, explanation: "기회주의(타협적 민족주의)를 배격하고, 광주 학생 항일 운동(1929)에 진상 조사단을 파견하는 등 적극 활동했습니다." },
  { id: 81, category: "modern", categoryLabel: "근·현대", text: "윤봉길은 상하이 훙커우 공원에서 폭탄을 던져 일제 고위 장성들을 처단하는 의거를 일으켰다.", answer: true, explanation: "1932년 한인애국단 소속 윤봉길의 의거는 중국 국민당 정부가 대한민국 임시 정부를 전폭적으로 지원하는 계기가 되었습니다." },
  { id: 82, category: "modern", categoryLabel: "근·현대", text: "1930년대 이후 일제는 우리 민족의 얼을 말살하기 위해 창씨개명과 신사 참배를 강요하였다.", answer: true, explanation: "민족 말살 통치 시기로, 조선어를 금지하고 한국인을 침략 전쟁의 총알받이(징용, 징병)로 동원했습니다." },
  { id: 83, category: "modern", categoryLabel: "근·현대", text: "1945년 모스크바 3국 외상 회의에서 한반도에 최고 5년간의 신탁 통치를 실시하기로 결정하였다.", answer: true, explanation: "이 결정으로 인해 국내에서는 우익(신탁 통치 반대)과 좌익(모스크바 회의 지지) 간의 대립이 극심해졌습니다." },
  { id: 84, category: "modern", categoryLabel: "근·현대", text: "제헌 국회는 반민족 행위 처벌법을 제정하여 친일파를 철저히 숙청하고 처벌하는 데 완전히 성공하였다.", answer: false, explanation: "반민특위가 구성되어 친일파 청산을 시도했으나, 이승만 정부의 소극적 태도와 친일 경찰의 방해로 실패하고 말았습니다." },
  { id: 85, category: "modern", categoryLabel: "근·현대", text: "이승만 정부 시기 '유상 매수, 유상 분배'를 원칙으로 하는 농지 개혁법이 제정되어 시행되었다.", answer: true, explanation: "이로 인해 지주제가 사실상 소멸하고 자영농이 육성되는 긍정적인 결과를 가져왔습니다." },
  { id: 86, category: "modern", categoryLabel: "근·현대", text: "1960년 3·15 부정 선거에 항의하여 학생과 시민이 주도한 4·19 혁명으로 이승만 대통령이 하야하였다.", answer: true, explanation: "우리나라 역사상 최초로 국민의 힘으로 독재 정권을 무너뜨린 민주주의 혁명입니다." },
  { id: 87, category: "modern", categoryLabel: "근·현대", text: "박정희 정부는 경제 개발 자금을 마련하기 위해 한일 국교를 정상화하고 베트남에 국군을 파병하였다.", answer: true, explanation: "한일 기본 조약 체결(1965) 과정에서 국민들의 거센 반대(6·3 시위)가 있었으나 강행되었습니다." },
  { id: 88, category: "modern", categoryLabel: "근·현대", text: "전두환 신군부 세력의 쿠데타에 맞서 광주 시민들은 5·18 민주화 운동을 일으키며 계엄 철폐를 요구했다.", answer: true, explanation: "1980년 일어난 이 운동의 기록물은 현재 유네스코 세계 기록 유산으로 등재되어 있습니다." },
  { id: 89, category: "modern", categoryLabel: "근·현대", text: "1987년 6월 민주 항쟁의 결과로 대통령 간선제를 유지하는 4·13 호헌 조치가 발표되었다.", answer: false, explanation: "4·13 호헌 조치에 분노하여 6월 항쟁이 일어났고, 결국 시민들의 승리로 '대통령 직선제' 개헌(6·29 민주화 선언)이 이루어졌습니다." },
  { id: 90, category: "modern", categoryLabel: "근·현대", text: "김대중 정부는 평양에서 역사상 최초의 남북 정상 회담을 개최하고 6·15 남북 공동 선언을 발표하였다.", answer: true, explanation: "햇볕 정책의 성과로, 이후 이산가족 상봉, 금강산 육로 관광, 개성 공단 건설 등이 추진되었습니다." },
  
  // [문화·사상 & 경제·사회 기타 심화]
  { id: 91, category: "culture", categoryLabel: "문화·사상", text: "신라의 승려 원효는 아미타 신앙을 전파하여 불교 대중화에 크게 기여하였다.", answer: true, explanation: "원효는 '나무아미타불'만 외우면 극락에 갈 수 있다고 가르치며 백성들에게 다가갔습니다." },
  { id: 92, category: "culture", categoryLabel: "문화·사상", text: "신라의 승려 의상은 당나라에서 화엄 사상을 배워와 부석사를 창건하고 제자를 양성했다.", answer: true, explanation: "의상은 화엄 사상을 통해 모든 존재가 상호 의존한다는 조화의 정신을 강조하여 전제 왕권을 뒷받침하기도 했습니다." },
  { id: 93, category: "culture", categoryLabel: "문화·사상", text: "불국사 3층 석탑(석가탑) 내에서 발견된 무구정광대다라니경은 현존하는 세계에서 가장 오래된 금속 활자본이다.", answer: false, explanation: "무구정광대다라니경은 현존 세계 최고(最古)의 '목판 인쇄물'입니다. 금속 활자본은 고려 시대의 '직지심체요절'입니다." },
  { id: 94, category: "culture", categoryLabel: "문화·사상", text: "고려 전기의 승려 의천은 교관겸수를 제창하며 해동 천태종을 개창하여 불교 종파를 통합하려 하였다.", answer: true, explanation: "교종을 중심으로 선종을 통합하고자 이론(교)과 수행(관)을 함께 닦아야 한다고 주장했습니다." },
  { id: 95, category: "culture", categoryLabel: "문화·사상", text: "고려 후기의 승려 지눌은 수선사 결사를 맺고 돈오점수와 정혜쌍수를 내세워 불교계를 개혁하려 하였다.", answer: true, explanation: "타락한 불교계를 비판하며 승려 본연의 자세(독경, 선 수행, 노동)로 돌아갈 것을 주장했습니다." },
  { id: 96, category: "culture", categoryLabel: "문화·사상", text: "고려 시대의 대표적인 공예인 상감 청자는 도자기에 무늬를 파고 그 속에 백토나 흑토를 채워 넣는 독창적 기법이다.", answer: true, explanation: "12세기 중엽에 절정을 이룬 상감 청자는 고려의 독보적인 예술적 성취를 보여줍니다." },
  { id: 97, category: "culture", categoryLabel: "문화·사상", text: "조선 태종 때 제작된 '혼일강리역대국도지도'는 유럽과 아프리카까지 그려진 동양 최고(最古)의 세계 지도이다.", answer: true, explanation: "조선 초기 지배층의 넓은 세계관(중화 사상 포함)과 활발한 영토 인식을 보여주는 지도입니다." },
  { id: 98, category: "culture", categoryLabel: "문화·사상", text: "조선의 학자 이황은 '성학십도'를 저술하여 군주 스스로 성학(성리학)을 깨달을 것을 강조하였다.", answer: true, explanation: "도덕적 이상주의를 강조한 퇴계 이황의 학설은 훗날 일본의 성리학 발전에도 큰 영향을 주었습니다." },
  { id: 99, category: "culture", categoryLabel: "문화·사상", text: "조선 후기 실학자 박지원은 '열하일기'를 저술하여 수레와 선박의 이용, 화폐 유통의 필요성을 주장하였다.", answer: true, explanation: "중상학파(북학파) 실학자로서 청나라의 선진 문물 수용을 적극적으로 주장했습니다." },
  { id: 100, category: "culture", categoryLabel: "문화·사상", text: "조선 후기 화가 정선은 중국의 화풍을 그대로 모방하여 우리나라 자연을 그리는 진경산수화를 완성하였다.", answer: false, explanation: "정선은 중국 화풍을 모방한 것이 아니라, 우리나라 산천을 직접 보고 그리는 독창적인 '진경산수화'를 개척했습니다." },
  
  // (추가 확장 데이터)
  { id: 101, category: "culture", categoryLabel: "문화·사상", text: "조선 후기에는 서민 문화가 발달하여 한글 소설, 사설시조, 판소리, 탈춤 등이 크게 유행하였다.", answer: true, explanation: "농업과 상공업의 발달로 경제적 여유를 얻은 서민들이 문화의 주체로 등장했습니다." },
  { id: 102, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선 전기에는 향약이 전국적으로 보급되어 지방 사림이 농민을 지배하는 주요 수단이 되었다.", answer: false, explanation: "향약이 전국적으로 널리 보급된 것은 조선 중기(16세기 사림 집권 이후)입니다." },
  { id: 103, category: "modern", categoryLabel: "근·현대", text: "국채 보상 운동(1907)은 일본에 진 빚을 갚아 경제적 예속에서 벗어나고자 대구에서 시작된 민족 운동이다.", answer: true, explanation: "서상돈 등의 주도로 시작되어 대한매일신보 등 언론의 지원을 받으며 전국적으로 확산되었습니다." },
  { id: 104, category: "modern", categoryLabel: "근·현대", text: "김구는 대한민국 임시 정부의 침체를 극복하기 위해 한인 애국단을 창설하였다.", answer: true, explanation: "이봉창(도쿄 의거)과 윤봉길(상하이 의거)이 한인 애국단 소속으로 활약하며 임시정부에 활력을 불어넣었습니다." },
  { id: 105, category: "modern", categoryLabel: "근·현대", text: "김영삼 정부 시기에는 경제 협력 개발 기구(OECD)에 가입하였으나 임기 말에 IMF 외환 위기를 맞았다.", answer: true, explanation: "문민정부를 표방한 김영삼 정부는 금융 실명제 실시 등의 성과가 있었으나, 1997년 외환 위기를 겪었습니다." },
  // ... (원하시는 경우 이 배열 형태를 참고하여 문제를 자유롭게 추가하실 수 있습니다.)

  // [중세 (고려) 추가 문항]
  { id: 106, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 태조는 유이민을 포섭하고 평양을 서경으로 삼아 북진 정책을 추진하였다.", answer: true, explanation: "태조 왕건은 고구려 계승 의식을 뚜렷이 하고자 서경(평양)을 중시하고 영토를 청천강에서 영흥 지방까지 확장했습니다." },
  { id: 107, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 성종은 국자감을 정비하고 지방에 경학박사와 의학박사를 파견하였다.", answer: true, explanation: "성종은 유교 중심의 통치 체제를 확립하기 위해 유학 교육을 장려하고 지방에도 교육관을 파견했습니다." },
  { id: 108, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 시대의 최고 정무 기구는 중추원이며, 국가의 중대사를 결정하였다.", answer: false, explanation: "고려의 최고 관청이자 국정을 총괄한 정무 기구는 '중서문하성'입니다. 중추원은 군사 기밀과 왕명 출납을 담당했습니다." },
  { id: 109, category: "medieval", categoryLabel: "중세 (고려)", text: "도병마사와 식목도감은 당나라의 제도를 그대로 수용하여 만든 중앙 관제이다.", answer: false, explanation: "도병마사와 식목도감은 당의 제도가 아니라, 고려의 실정에 맞게 독자적으로 만든 고려만의 독창적인 기구(귀족 회의 기구)입니다." },
  { id: 110, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 시대의 언론 기구인 대간은 중서문하성의 낭사와 중추원의 은문으로 구성되었다.", answer: false, explanation: "대간은 중서문하성의 '낭사'와 어사대의 '관원'으로 구성되어 왕의 실정을 간쟁하고 사정 업무를 담당했습니다." },
  { id: 111, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 목종 때 처음 실시된 시정 전시과는 인품과 관직 높낮이를 모두 고려하여 토지를 지급했다.", answer: true, explanation: "처음 만들어진 시정 전시과는 사성(성씨)과 인품, 그리고 자삼·단삼 등의 관품을 기준으로 삼았습니다." },
  { id: 112, category: "medieval", categoryLabel: "중세 (고려)", text: "개정 전시과(목종 때)에서는 인품을 배제하고 관직(관품)만을 기준으로 토지를 지급하기 시작했다.", answer: true, explanation: "시정 전시과의 불합리함을 고치기 위해 객관적인 기준인 관품(18품)만을 토대로 개정되었습니다." },
  { id: 113, category: "medieval", categoryLabel: "중세 (고려)", text: "고려의 향리는 지방관이 파견되지 않은 속현이나 부곡 등에서 실질적인 통치권을 행사하였다.", answer: true, explanation: "조선의 향리와 달리 고려의 향리는 호장·부호장 등으로 불리며 조세 수취와 행정을 실질적으로 주도한 토착 세력이었습니다." },
  { id: 114, category: "medieval", categoryLabel: "중세 (고려)", text: "거란의 2차 침입 때 양규는 흥화진 전투 등에서 크게 활약하며 거란군을 퇴각시켰다.", answer: true, explanation: "양규는 강조의 정변을 구실로 쳐들어온 거란의 대군을 상대로 게릴라전을 펼쳐 수많은 고려인 포로를 구출했습니다." },
  { id: 115, category: "medieval", categoryLabel: "중세 (고려)", text: "고려는 거란의 침입을 모두 물리친 후 수도 개경에 천리장성을 축조하였다.", answer: false, explanation: "수도 개경의 방어를 위해 쌓은 것은 '나성'입니다. 천리장성은 압록강에서 도련포까지 국경선에 쌓은 성입니다." },
  { id: 116, category: "medieval", categoryLabel: "중세 (고려)", text: "숙종 때 의천의 건의로 주전도감이 설치되어 해동통보, 활구(은병) 등의 화폐가 주조되었다.", answer: true, explanation: "의천은 상업과 유통의 활성화를 위해 왕실에 화폐 발행을 강력히 건의하여 실현시켰습니다." },
  { id: 117, category: "medieval", categoryLabel: "중세 (고려)", text: "문벌 귀족 사회의 내부 모순으로 촉발된 대표적인 사건에는 이자겸의 난과 묘청의 서경 천도 운동이 있다.", answer: true, explanation: "왕실과의 중첩된 혼인으로 권력을 독점한 문벌 귀족 사회의 붕괴 과정을 잘 보여주는 사건들입니다." },
  { id: 118, category: "medieval", categoryLabel: "중세 (고려)", text: "무신 정권의 첫 집권자인 이의방은 중방을 중심으로 권력을 행사하였다.", answer: true, explanation: "초기 무신 집권자들(정중부, 경대승, 이의민 등)은 상장군과 대장군의 합좌 기구인 '중방'을 최고 권력 기구로 삼았습니다." },
  { id: 119, category: "medieval", categoryLabel: "중세 (고려)", text: "경대승은 신변 보호를 위해 도방이라는 사병 집단을 조직하였다.", answer: true, explanation: "도방은 무신 정권 시기 집권자의 신변을 경호하던 사병 조직으로, 훗날 최충헌 대에 이르러 더욱 확대됩니다." },
  { id: 120, category: "medieval", categoryLabel: "중세 (고려)", text: "무신 집권기에 경상도 청도에서는 김사미와 효심 등이 농민 봉기를 일으켰다.", answer: true, explanation: "이의민 집권기 전후로 지방 통제력이 약화되자 삼남 지방을 중심으로 대규모 민란이 발생했습니다." },
  { id: 121, category: "medieval", categoryLabel: "중세 (고려)", text: "최우 정권은 서방을 설치하여 문신들을 등용하고 정책 자문을 구하였다.", answer: true, explanation: "최우는 군사력뿐만 아니라 행정력을 보완하기 위해 문신들의 인사 기구 겸 자문 기구인 '서방'을 두었습니다." },
  { id: 122, category: "medieval", categoryLabel: "중세 (고려)", text: "몽골의 3차 침입 때 경주에 있던 황룡사 9층 목탑이 불타 소실되었다.", answer: true, explanation: "신라 선덕여왕 때 지어진 소중한 문화재인 황룡사 탑과 초조대장경판이 몽골의 침략 과정에서 소실되었습니다." },
  { id: 123, category: "medieval", categoryLabel: "중세 (고려)", text: "원나라의 내정 간섭기 때 공녀 징발을 담당하던 기구는 정동행성이었다.", answer: false, explanation: "공녀를 징발하기 위해 임시로 설치한 기구는 '결혼도감'입니다. 정동행성은 일본 원정을 위해 설치된 기구입니다." },
  { id: 124, category: "medieval", categoryLabel: "중세 (고려)", text: "공민왕은 원·명 교체기를 틈타 정동행성 이문소를 폐지하고 관제를 복구하였다.", answer: true, explanation: "공민왕은 대외적인 정세 변화를 포착하여 과감한 반원 자주 개혁 정책을 밀어붙였습니다." },
  { id: 125, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 말 신진 사대부는 권문세족과 불교계의 패단을 강력히 비판하며 성장했다.", answer: true, explanation: "성리학을 수용한 이들은 권문세족의 대토지 소유와 사찰의 경제적 타락을 조목조목 비판했습니다." },
  { id: 126, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 말 화포를 사용하여 왜구를 크게 물리친 해전은 한산도 대첩이다.", answer: false, explanation: "최무선이 화포를 사용하여 왜선 500여 척을 침몰시킨 전투는 '진포 해전(1380)'입니다." },
  { id: 127, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 후기 이규보가 지은 '동명왕편'은 백제 온조왕의 건국 서사를 담은 영웅시이다.", answer: false, explanation: "동명왕편은 백제가 아니라 '고구려 시조 동명왕(주몽)'의 영웅적인 일대기를 기술한 시입니다." },
  { id: 128, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 시대 여성은 호적에 나이순으로 기재되었으며 재혼이 비교적 자유로웠다.", answer: true, explanation: "조선 후기와 달리 남녀 차별이 덜하여 딸도 호주가 될 수 있었고 음서의 혜택도 사위나 외손자에게 미쳤습니다." },
  { id: 129, category: "medieval", categoryLabel: "중세 (고려)", text: "의천은 선종을 중심으로 교종을 통합하고자 정혜쌍수를 주장하였다.", answer: false, explanation: "선종 중심의 통합과 정혜쌍수를 주장한 승려는 '지눌'입니다. 의천은 교종 중심으로 '교관겸수'를 주장했습니다." },
  { id: 130, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 시대의 관학 진흥책으로는 충렬왕 때 자학 재단으로 설치된 섬학전이 있다.", answer: true, explanation: "위축된 관학을 살리기 위해 안향의 건의로 장학 기금인 '섬학전'을 마련하여 양현고를 보완했습니다." },
  { id: 131, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 후기에 지어진 안동 봉정사 극락전은 현존하는 가장 오래된 목조 건축물이다.", answer: true, explanation: "봉정사 극락전은 고려 시대 주심포 양식의 단아한 건물로, 우리나라에서 가장 오래된 가치를 지닙니다." },
  { id: 132, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 시대에 유행한 원각사지 10층 석탑은 대리석으로 만들어졌으며 원나라의 영향을 받았다.", answer: false, explanation: "원나라의 영향을 받은 대리석 탑은 '경천사지 10층 석탑'입니다. 원각사지 탑은 조선 세조 때 경천사지 탑을 본떠 만든 것입니다." },
  { id: 133, category: "medieval", categoryLabel: "중세 (고려)", text: "충선왕은 사림원을 설치하여 왕권 중심의 개혁 정치를 도모하였다.", answer: true, explanation: "충선왕은 즉위 직후 정방을 폐지하고 사림원을 통해 측근 세력을 육성하여 개혁을 시도했습니다." },
  { id: 134, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 시대 농업 기술의 발달로 이암이 도입한 '농상집요'가 널리 소개되었다.", answer: true, explanation: "농상집요는 원나라의 농서로, 고려 후기 이암이 가져와 우리나라 농업 발전에 기여했습니다." },
  { id: 135, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 말 홍산 대첩에서 최영은 이끄는 군대로 왜구를 크게 격퇴하였다.", answer: true, explanation: "최영은 부여 홍산에서 격렬한 전투 끝에 왜구를 대파하여 국민적 영웅으로 부상했습니다." },
  { id: 136, category: "medieval", categoryLabel: "중세 (고려)", text: "공민왕 때 홍건적의 침입으로 왕이 복주(안동)까지 피난을 가기도 했다.", answer: true, explanation: "공민왕 대에는 개경이 홍건적에게 함락당하는 국가적 위기로 안동(복주)까지 몽진을 떠나야 했습니다." },
  { id: 137, category: "medieval", categoryLabel: "중세 (고려)", text: "고려의 관리 등용 제도 중 하나인 음서는 오품 이상 고관의 자제에게 과거 없이 관직을 주는 특권이었다.", answer: true, explanation: "음서는 문벌 귀족 사회의 가문 지위를 독점하고 세습할 수 있게 만든 강력한 기반이었습니다." },
  { id: 138, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 시대 향, 부곡, 소의 주민들은 평민 신분이지만 국자감에 입학할 수 있었다.", answer: false, explanation: "특수 행정 구역 주민들은 평민(양인)이었지만 신분적 제약으로 국자감 입학이 금지되었고 과거 응시도 제한되었습니다." },
  { id: 139, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 무신 집권기 중 이의민은 천민(노비) 출신에서 최고 권력자까지 오른 인물이다.", answer: true, explanation: "이의민은 어머니가 사찰의 노비였던 천출이었으나 경대승 사후 권력을 잡아 신분 유동성을 상징적으로 보여주었습니다." },
  { id: 140, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 후기 충렬왕 때 문익점이 덕흥군을 지지하다가 유배되던 중 목화씨를 가져왔다.", answer: false, explanation: "문익점이 원나라에서 목화씨를 붓통에 숨겨 들어온 시기는 고려 말 '공민왕' 때의 일입니다." },
  { id: 141, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 전기의 역사서인 오운의 '동사찬요'는 기전체 형식의 역사서이다.", answer: false, explanation: "동사찬요는 조선 시대의 역사서입니다. 고려 전기의 대표적 관찬 역사서는 기전체인 김부식의 '삼국사기'입니다." },
  { id: 142, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 중기 숙종 때 서적포를 설치하여 국자감의 인쇄 기능을 강화하였다.", answer: true, explanation: "숙종은 국자감 안에 서적의 간행과 보관을 전담하는 '서적포'를 두어 교육 진흥에 힘썼습니다." },
  { id: 143, category: "medieval", categoryLabel: "중세 (고려)", text: "몽골과의 대포천 전투와 처인성 전투는 모두 김윤후가 지휘하여 승리한 전투이다.", answer: false, explanation: "처인성 전투(2차)와 충주성 전투(5차)가 김윤후의 대표적 승전지입니다. 대포천 전투는 대몽 항쟁의 또 다른 격전지입니다." },
  { id: 144, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 말 조준 등의 건의로 권문세족의 토지를 몰수해 관료들에게 나누어 준 제도는 직전법이다.", answer: false, explanation: "조선 건국 직전인 1391년에 실시된 토지 제도는 '과전법'입니다. 직전법은 조선 세조 때 실시되었습니다." },
  { id: 145, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 성종 대에는 거란의 침입에 대항해 압록강 동쪽에 강동 6주를 확보했다.", answer: true, explanation: "성종 때 거란의 1차 침입이 있었으며, 이때 서희의 외교적 담판으로 강동 6주 영토를 편입시켰습니다." },
  { id: 146, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 전기에는 대외 무역 상점을 감독하기 위해 개경에 '시전'과 '경시서'를 설치했다.", answer: true, explanation: "수도인 개경의 시전 상업 활동을 통제하고 물가를 감독하기 위해 '경시서'를 운영했습니다." },
  { id: 147, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 가요에는 '청산별곡', '쌍화점' 등 당시 서민과 지배층의 감정을 대변하는 노래들이 전해진다.", answer: true, explanation: "고려 시대의 구전 가요들은 조선 시대에 이르러 한글로 정착되어 문학사적 가치를 높였습니다." },
  { id: 148, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 예종 때 설립된 청연각과 보문각은 학문을 연구하고 도서를 보관하던 대궐 안의 기구였다.", answer: true, explanation: "예종은 관학을 살리기 위해 궁중에 학문 연구소인 청연각과 보문각을 짓고 유학자들을 우대했습니다." },
  { id: 149, category: "medieval", categoryLabel: "중세 (고려)", text: "조계종을 개창한 지눌은 불교 수행법으로 성리학을 적극 활용할 것을 권장했다.", answer: false, explanation: "지눌은 철저히 불교 경전과 참선(정혜쌍수, 돈오점수)을 바탕으로 개혁안을 폈지, 성리학을 활용하진 않았습니다." },
  { id: 150, category: "medieval", categoryLabel: "중세 (고려)", text: "고려 말 신진 사대부 세력은 위화도 회군을 거치며 혁명파와 온건파로 분열되었다.", answer: true, explanation: "정도전 등 역성혁명파는 고려를 멸망시키려 했고, 정몽주 등 온건파는 고려 왕조 내의 개혁을 주장하며 대립했습니다." },

  // [근세 (조선) 추가 문항]
  { id: 151, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선 태조 때 정도전은 '조선경국전'을 저술하여 재상 중심의 정치 체제를 구상하였다.", answer: true, explanation: "정도전은 국왕의 권력을 견제하고 현명한 재상이 정치를 주도해야 한다는 신권 중심 정치를 지향했습니다." },
  { id: 152, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선 태종은 사간원을 독립시켜 신하들에 대한 감찰과 왕권 강화를 도모했다.", answer: true, explanation: "태종은 문하부의 낭사를 분리해 '사간원'으로 독립시킨 후, 대간의 간쟁을 통해 대신 세력을 견제하게 했습니다." },
  { id: 153, category: "early-modern", categoryLabel: "근세 (조선)", text: "세종 때 장영실 등이 제작한 칠정산은 아라비아 회회력을 참고하여 만든 우리나라 독자적인 역법서이다.", answer: true, explanation: "한양을 기준으로 천체 관측을 계산하여 만든 최초의 자주적인 역법서로 가치가 큽니다." },
  { id: 154, category: "early-modern", categoryLabel: "근세 (조선)", text: "세종은 집현전을 설치하여 학문 연구를 장려하고, 의정부 서사제를 통해 왕권과 신권의 조화를 꾀했다.", answer: true, explanation: "태종의 6조 직계제와 달리 재상들의 심의를 거치게 하는 '의정부 서사제'로 국정을 안정시켰습니다." },
  { id: 155, category: "early-modern", categoryLabel: "근세 (조선)", text: "세조는 관리들에게 퇴직 후에도 토지를 지급하는 과전법을 유지하여 훈구 세력을 우대했다.", answer: false, explanation: "세조는 토지 부족 문제를 해결하고 국가 재정을 늘리기 위해 전직 관리를 배제하고 현직 관리에게만 수조권을 주는 '직전법'을 단행했습니다." },
  { id: 156, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선 성종은 훈구 세력을 견제하기 위해 김종직 등 영남 출신의 사림 세력을 대거 등용하였다.", answer: true, explanation: "성종은 3사(사헌부·사간원·홍문관)의 요직에 사림을 배치하여 훈구파의 부정부패를 비판하게 했습니다." },
  { id: 157, category: "early-modern", categoryLabel: "근세 (조선)", text: "연산군 때 발생한 무오사화는 김종직이 작성한 '조의제문'이 발단이 되어 사림이 화를 입은 사건이다.", answer: true, explanation: "훈구파 이극돈 등이 김일손이 사초에 실은 조의제문(항우에게 죽은 의제를 조문하는 글)이 세조의 왕위 찬탈을 비판한 것이라며 연산군을 자극했습니다." },
  { id: 158, category: "early-modern", categoryLabel: "근세 (조선)", text: "중종 때 일어난 을사사화는 외척 간의 권력 다툼으로 인해 사림 세력이 큰 피해를 입은 사건이다.", answer: false, explanation: "을사사화는 명종 즉위 직후 대윤(윤임)과 소윤(윤원형)이라는 외척 싸움에 사림이 휘말린 사건입니다. 중종 때는 기묘사화가 있었습니다." },
  { id: 159, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선의 사헌부는 관리의 비리를 감찰하고 풍속을 바로잡는 역할을 한 언론 기구이다.", answer: true, explanation: "사헌부는 사간원, 홍문관과 함께 '3사'로 불리며 권력의 독점과 부정을 막는 중요한 기능을 수행했습니다." },
  { id: 160, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선의 승정원은 국왕의 비서 기관으로, 왕명의 출납을 담당하여 왕권을 뒷받침했다.", answer: true, explanation: "승정원의 일기인 '승정원일기'는 유네스코 세계기록유산으로 지정되어 있을 만큼 방대한 기록물입니다." },
  { id: 161, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선 시대 의금부는 관리를 감찰하고 왕실의 도서를 보관하던 학문 연구 기관이었다.", answer: false, explanation: "의금부는 국왕 직속의 사법 기구로 왕권에 도전하는 대역죄나 역모 등 중죄인을 국문하던 곳입니다. 도서 보관은 규장각이나 홍문관 등의 성격을 갖습니다." },
  { id: 162, category: "early-modern", categoryLabel: "근세 (조선)", text: "지방관인 수령을 보좌하고 향촌의 풍속을 교정하기 위해 지방 양반들이 조직한 자치 기구는 유향소(향청)이다.", answer: true, explanation: "유향소는 좌수와 별감을 두고 향리를 감찰하며 지방 여론을 수렴하는 양반들의 자치 기구였습니다." },
  { id: 163, category: "early-modern", categoryLabel: "근세 (조선)", text: "중종 때 서세원이 풍기 군수로 있을 때 우리나라 최초의 서원인 백운동 서원을 건립하였다.", answer: false, explanation: "백운동 서원을 건립한 풍기 군수는 '주세붕'입니다. 훗날 이황의 건의로 명종으로부터 '소수서원'이라는 현판을 받아 사액 서원의 효시가 되었습니다." },
  { id: 164, category: "early-modern", categoryLabel: "근세 (조선)", text: "명종 때 임꺽정은 황해도와 경기도 일대를 무대로 활약하며 대규모 도적 집단을 이끌고 저항했다.", answer: true, explanation: "명종 대에는 외척 정치의 폐단과 수탈이 심화되어 하층민들의 불만이 임꺽정의 난과 같은 형태로 표출되었습니다." },
  { id: 165, category: "early-modern", categoryLabel: "근세 (조선)", text: "선조 대에 사림이 동인과 서인으로 분열되는 결정적인 계기는 이조전랑직을 둘러싼 대립이었다.", answer: true, explanation: "김효원(동인)과 심의겸(서인)의 갈등과 인사 추천권을 가진 이조전랑 자리를 두고 붕당이 본격화되었습니다." },
  { id: 166, category: "early-modern", categoryLabel: "근세 (조선)", text: "임진왜란 중 곽재우, 고경명, 조헌 등은 향촌 사회를 기반으로 군대를 조직한 의병장들이다.", answer: true, explanation: "의병들은 익숙한 향촌 지형을 활용하여 게릴라전을 펼쳐 일본군의 보급로를 차단하는 성과를 올렸습니다." },
  { id: 167, category: "early-modern", categoryLabel: "근세 (조선)", text: "임진왜란의 위기 속에서 유성룡의 건의로 양반부터 천민까지 편제된 훈련도감이 신설되었다.", answer: true, explanation: "훈련도감은 포수, 사수, 살수의 삼수병으로 구성된 상비군(직업 군인) 체제였습니다." },
  { id: 168, category: "early-modern", categoryLabel: "근세 (조선)", text: "광해군 때 경기도에 처음 실시된 대동법은 토지 1결당 쌀 12두를 징수하는 공납의 전세화 제도이다.", answer: true, explanation: "가호(집집)마다 내던 특산물을 토지 소유 기준(결수)으로 바꾸어 농민의 경제적 부담을 줄여주었습니다." },
  { id: 169, category: "early-modern", categoryLabel: "근세 (조선)", text: "인조 때 실시된 영정법은 풍흉에 관계없이 토지 1결당 쌀 4~6두를 고정으로 징수하는 제도이다.", answer: true, explanation: "세종 때의 연분9등법이 현실적으로 복잡해지자 최저 세율 수준으로 고정하여 조세 부담을 정형화했습니다." },
  { id: 170, category: "early-modern", categoryLabel: "근세 (조선)", text: "현종 때 효종과 효종비의 사망에 따른 자의대비의 상복 착용 기간을 두고 예송 논쟁이 전개되었다.", answer: true, explanation: "서인(기년설 등)과 남인(3년설 등)이 왕실의 의례 규정을 두고 정권의 정통성 공방을 벌였습니다." },
  { id: 171, category: "early-modern", categoryLabel: "근세 (조선)", text: "숙종은 서인과 남인을 번갈아 집권시키는 환국 정치를 통해 탕평 정국을 완벽하게 안정시켰다.", answer: false, explanation: "숙종의 환국 정치(경신·기사·갑술환국)는 정권이 급격히 바뀌며 상대 붕당을 사사하는 등 공존의 원칙을 깨뜨리고 붕당 정치를 변질시켰습니다." },
  { id: 172, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선 후기 대동법의 실시로 관청에 필요한 물품을 대량으로 조달하는 '공인'이 등장하여 상품 화폐 경제가 발달했다.", answer: true, explanation: "공인들이 시장에서 대량으로 물건을 구매하면서 상업과 수공업이 크게 활성화되는 계기가 되었습니다." },
  { id: 173, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선 후기 도고(독점적 도매상인)로 성장한 대표적인 사상에는 개성의 만상과 의주의 송상이 있다.", answer: false, explanation: "의주에서 활약한 청나라 무역 상인은 '만상'이며, 개성을 중심으로 전국 송방을 거느린 상인은 '송상'입니다. 서로 위치가 바뀌었습니다." },
  { id: 174, category: "early-modern", categoryLabel: "근세 (조선)", text: "정조 때 신해통공(1791)을 단행하여 시전 상인들이 가졌던 금난전권을 폐지(육의전 제외)하였다.", answer: true, explanation: "금난전권 폐지로 사상(사설 상인)들의 자유로운 상업 활동이 보장되어 도심 물가가 안정되었습니다." },
  { id: 175, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선 후기 신분제의 동요 속에서 납속책과 공명첩 발급을 통해 부를 축적한 상민들이 양반으로 신분을 상승시켰다.", answer: true, explanation: "국가 재정 보충을 위해 발행한 공명첩(이름이 비어있는 관직 임명장)으로 인해 양반의 수가 급증하고 신분제가 해체되었습니다." },
  { id: 176, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선 후기 서얼들은 영조와 정조의 탕평책 속에서 정조 때 규장각 검서관(이덕무, 유득공 등)으로 기용되기도 했다.", answer: true, explanation: "첩의 자식이라는 이유로 차별받던 서얼들은 상소 운동(통청 운동)과 국왕의 배려로 관직 진출의 길이 열렸습니다." },
  { id: 177, category: "early-modern", categoryLabel: "근세 (조선)", text: "19세기 진주 민란을 시작으로 임술 농민 봉기가 전국적으로 확산되자 정부는 안핵사 박규수를 파견하고 삼정이정청을 설치했다.", answer: true, explanation: "경상우병사 백낙신의 수탈에 맞서 유계춘이 일으킨 진주 민란이 발단이 되어 삼정의 문란을 고치기 위한 기구를 임시로 만들었습니다." },
  { id: 178, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선 후기 최제우가 창시한 동학은 시천주와 인내천 사상을 내세워 모든 사람이 평등함을 주장했다.", answer: true, explanation: "서학(천주교)에 대응하여 민족 종교로 창시된 동학은 농민층의 큰 지지를 받으며 교세를 확장했습니다." },
  { id: 179, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선 후기 지리서인 김정호의 '대동여지도'는 10리마다 눈금을 표시하여 거리 측정을 가능케 한 목판본 지도이다.", answer: true, explanation: "대동여지도는 22첩의 접이식으로 제작되어 휴대가 간편하고 산맥과 도로망이 매우 정밀하게 표현되어 있습니다." },
  { id: 180, category: "early-modern", categoryLabel: "근세 (조선)", text: "실학자 유형원은 '반계수록'에서 관리, 선비, 농민에게 차등을 두어 토지를 재분배하자는 균전론을 제시했다.", answer: true, explanation: "중농학파의 선구자인 유형원은 신분에 따른 차등은 인정하되 영세 농민의 토지를 안정시키고자 했습니다." },
  { id: 181, category: "early-modern", categoryLabel: "근세 (조선)", text: "실학자 이익은 농가 경제의 안정을 위해 매매를 금지하는 최소한의 토지인 '영업전'을 설정하는 한전론을 주장했다.", answer: true, explanation: "이익은 성호사설 등에서 6좀(양반, 노비, 과거 등)을 비판하고 토지 소유의 하한선을 정하려 했습니다." },
  { id: 182, category: "early-modern", categoryLabel: "근세 (조선)", text: "정약용은 '경세유표'에서 토지를 마을 단위로 공동 소유하고 공동 경작하여 수확량을 나누는 여전론을 제안했다.", answer: true, explanation: "정약용은 초기에는 여전론을 주장했으나, 이후 실현 가능성을 고려하여 정전론을 수정 제시하기도 했습니다." },
  { id: 183, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선 전기 세종 때 편찬된 '농사직설'은 중국의 농법을 100% 모방하여 관료들에게 지침서로 내린 책이다.", answer: false, explanation: "농사직설은 중국 농서의 한계를 극복하고자 정초 등이 '우리나라 고유의 풍토와 노농들의 경험'을 바탕으로 저술한 자주적 농서입니다." },
  { id: 184, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선 후기 국학 연구가 심화되면서 한치윤은 기전체 역사서인 '해동역사'를 편찬하여 해외 자료를 널리 인용했다.", answer: true, explanation: "해동역사는 중국, 일본 등 500여 종의 외래 문헌을 대거 인용하여 우리 역사의 객관성을 넓힌 명저입니다." },
  { id: 185, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선 후기 영조 때 신경준이 편찬한 '훈민정음운해'는 한글 연구와 국어학 발전에 기여했다.", answer: true, explanation: "국어 연구가 발달하면서 훈민정음의 음운 체계를 과학적으로 분석한 저술들이 연이어 등장했습니다." },
  { id: 186, category: "early-modern", categoryLabel: "근세 (조선)", text: "안용복은 숙종 때 울릉도와 독도에 출몰하는 왜인들을 쫓아내고 일본 백기주 태수로부터 조선 영토임을 확약받았다.", answer: true, explanation: "안용복이라는 민간인의 헌신적인 외교 활동으로 우리 영토인 울릉도와 독도의 주권을 지켜낼 수 있었습니다." },
  { id: 187, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선 시대 의장 부대이자 국왕 호위를 담당하며 수도 외곽을 방어한 군사 기구는 수어청이다.", answer: false, explanation: "인조 때 남한산성을 거점으로 수도 남쪽 외곽을 방어하기 위해 설치한 군영이 '수어청'입니다. 호위 핵심은 훈련도감이나 용영 등입니다." },
  { id: 188, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선 시대에 서얼뿐만 아니라 중인(기술직, 향리)들도 시사를 조직하여 위항 문학 운동을 전개하였다.", answer: true, explanation: "문화적 역량을 키운 중인층은 시모임을 결성하고 자신들의 문집을 간행하는 등 독자적 문학 세계를 열었습니다." },
  { id: 189, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선 후기 유득공은 '발해고'를 저술하여 통일신라와 발해를 '남북국 시대'로 부를 것을 처음으로 제안했다.", answer: true, explanation: "발해를 우리 민족사의 정통으로 명확히 인식하여 한국사의 공간적 범위를 만주까지 넓힌 획기적인 역사서입니다." },
  { id: 190, category: "early-modern", categoryLabel: "근세 (조선)", text: "조선 시대의 중앙 관제인 3사(사헌부·사간원·홍문관)의 관원들은 청요직이라 불리며 승진 가도가 보장되었다.", answer: true, explanation: "3사는 관직 임명의 동의권(서경권) 등을 행사하며 권력의 독점을 막는 핵심 보직으로 엘리트 코스였습니다." },

  // [근·현대 추가 문항]
  { id: 191, category: "modern", categoryLabel: "근·현대", text: "흥선대원군은 서원을 47개소만 남기고 모두 철폐하여 양반들의 큰 환영을 받았다.", answer: false, explanation: "서원 철폐는 면세 특권을 누리던 양반 세력의 기반을 무너뜨린 조치였으므로, 양반(유림)들의 엄청난 반발과 탄핵을 유발했습니다." },
  { id: 192, category: "modern", categoryLabel: "근·현대", text: "1866년 프랑스군이 강화도를 침략하여 외규장각 도서 등을 약탈해 간 사건은 신미양요이다.", answer: false, explanation: "프랑스 신부 처형(병인박해)을 구실로 프랑스군이 침입한 사건은 '병인양요(1866)'입니다. 신미양요는 미국군이 침입한 사건입니다." },
  { id: 193, category: "modern", categoryLabel: "근·현대", text: "강화도 조약(한일수호조규) 직후 조선 정부는 개화 정책을 총괄하는 기구로 '통리기무아문'을 신설했다.", answer: true, explanation: "통리기무아문 아래 12사를 두고 군사와 외교 등 근대적 개혁을 본격적으로 추진하기 시작했습니다." },
  { id: 194, category: "modern", categoryLabel: "근·현대", text: "조선 정부가 일본의 근대 시설과 문물을 시찰하기 위해 파견한 비밀 사절단은 '보빙사'이다.", answer: false, explanation: "일본에 파견한 사절단은 '조사시찰단(신사유람단)'입니다. 보빙사는 조미수호통상조약 체결 이후 '미국'에 파견한 사절단입니다." },
  { id: 195, category: "modern", categoryLabel: "근·현대", text: "갑신정변 당시 급진 개화파가 발표한 개혁 정강 14조에는 청에 대한 사대 관계 폐지와 지조법 개혁이 포함되어 있다.", answer: true, explanation: "근대 국가 수립을 목표로 신분제 폐지, 호조로의 재정 일원화 등 획기적인 개혁안을 제시했습니다." },
  { id: 196, category: "modern", categoryLabel: "근·현대", text: "동학 농민 운동의 1차 봉기는 고부 군수 조병갑의 탐학에 맞서 전봉준 등이 일으킨 고부 민란이 도화선이 되었다.", answer: true, explanation: "만석보 수세 강제 징수 등 조병갑의 폭정에 분노한 농민들이 사발통문을 돌리며 봉기했습니다." },
  { id: 197, category: "modern", categoryLabel: "근·현대", text: "1894년 제1차 갑조개혁을 추진하기 위해 설치된 초정부적 개혁 기구는 '궁국기무처'이다.", answer: true, explanation: "김홍집 가 주도한 군국기무처는 단기간 내에 신분제 폐지, 과거제 폐지 등 수백 건의 근대적 개혁안을 통과시켰습니다." },
  { id: 198, category: "modern", categoryLabel: "근·현대", text: "단발령 시행과 명성황후 시해에 반발하여 위정척사 계열의 유생들이 주도하여 일으킨 최초의 의병은 을미의병이다.", answer: true, explanation: "유인석, 이소응 등이 봉기하였으나 고종의 단발령 철회 권고 조칙에 따라 대부분 자진 해산하였습니다." },
  { id: 199, category: "modern", categoryLabel: "근·현대", text: "독립협회가 중추원 개편을 통해 의회 설립 운동을 추진하자 보수 세력은 황국협회를 동원하여 독립협회를 강제 해산시켰다.", answer: true, explanation: "보수파는 독립협회가 공화정을 획책한다는 익명서를 조작하여 고종을 움직여 보부상 단체인 황국협회와 군대를 동원해 진압했습니다." },
  { id: 200, category: "modern", categoryLabel: "근·현대", text: "대한제국의 광무개혁 시기 수립된 '대한국 국제'는 국왕(황제)에게 무한한 군권을 부여하는 전제 군주제를 명시했다.", answer: true, explanation: "독립협회의 의회 중심 구상과 달리, 황제에게 모든 법률 제정권, 군대 통수권, 외교권을 집중시킨 헌법적 문서였습니다." },

  // [근·현대사 & 지역·문화사 고난도 심화 문항]
  {
    id: 201,
    category: "modern",
    categoryLabel: "근·현대",
    text: "신미양요 당시 어재연 장군이 이끄는 조선군은 강화도 광성보에서 미국군에 맞서 결사 항전하였다.",
    answer: true,
    explanation: "어재연 장군과 수자기(帥字旗) 탈취 사건은 신미양요(1871)의 핵심 출제 포인트입니다."
  },
  {
    id: 202,
    category: "modern",
    categoryLabel: "근·현대",
    text: "조일통상장정 개정(1883)을 통해 관세가 설정되었으나 방곡령 시행 권한은 박탈당했다.",
    answer: false,
    explanation: "1883년 조일통상장정 개정으로 관세가 신설되었고, 지방관이 곡물 유출을 막을 수 있는 '방곡령 규정'이 처음으로 명시되었습니다."
  },
  {
    id: 203,
    category: "modern",
    categoryLabel: "근·현대",
    text: "임오군란 이후 체결된 조청상민수륙무역장정으로 청나라 상인의 내지 채판권(내륙 상행위)이 허용되었다.",
    answer: true,
    explanation: "이 장정으로 청나라 상인이 한양 도성 안과 내륙까지 직접 들어와 상행위를 할 수 있게 되어 조선 상인들이 큰 타격을 입었습니다."
  },
  {
    id: 204,
    category: "modern",
    categoryLabel: "근·현대",
    text: "갑신정변을 주도한 개화파는 혜상공국을 혁파하여 자유로운 상업 발전을 도모하려 했다.",
    answer: true,
    explanation: "개혁 정강 14조에 보부상 특권 기구인 '혜상공국 폐지'가 명시되어 사상들의 상업 자유화를 추구했습니다."
  },
  {
    id: 205,
    category: "modern",
    categoryLabel: "근·현대",
    text: "동학 농민군이 제시한 폐정 개혁안 12조에는 토지의 평균 분작(균등 분배) 주장이 포함되어 있다.",
    answer: true,
    explanation: "농민군은 '토지는 평균으로 나누어 경작하게 할 것'을 주장하여 조선의 봉건적 토지 소유 체제에 도전했습니다."
  },
  {
    id: 206,
    category: "modern",
    categoryLabel: "근·현대",
    text: "제2차 갑오개혁 때 고종은 홍범 14조를 발표하고, 지방 행정 구역을 8도에서 23부로 개편했다.",
    answer: true,
    explanation: "2차 갑오개혁(김홍집·박영효 연립 내각)은 홍범 14조 반포, 23부제 개편, 재판소 설치(사법권 독립)가 핵심입니다."
  },
  {
    id: 207,
    category: "modern",
    categoryLabel: "근·현대",
    text: "을미개혁(제3차 개혁) 때 우체사 설치, 태양력 채택과 함께 '종두법'이 시행되었다.",
    answer: true,
    explanation: "을미개혁은 단발령, 태양력, 건양 연호, 종두법, 소학교 설치 등이 단골로 출제됩니다."
  },
  {
    id: 208,
    category: "modern",
    categoryLabel: "근·현대",
    text: "독립협회는 중추원 관제 개정을 통해 관민 공동회를 개최하고 '헌의 6조'를 결의하여 고종의 승인을 받았다.",
    answer: true,
    explanation: "헌의 6조는 외국과의 이권 양보 시 대신들의 합동 서명, 재정의 탁지부 일원화 등을 골자로 한 의회 설립 운동의 결실이었습니다."
  },
  {
    id: 209,
    category: "modern",
    categoryLabel: "근·현대",
    text: "대한제국 광무개혁 시기 상공업 진흥을 위해 근대적 공장과 회사 설립을 지원하는 지계아문이 설치되었다.",
    answer: false,
    explanation: "지계아문은 근대적 토지 소유권 증서인 '지계'를 발급하는 기구였습니다. 상공업 진흥은 혜상공국이나 농상공부 등과 관련이 있습니다."
  },
  {
    id: 210,
    category: "modern",
    categoryLabel: "근·현대",
    text: "을사늑약에 반발하여 민영환, 조병세 등 고위 관료들이 자결로 항거하였다.",
    answer: true,
    explanation: "외교권이 박탈당하자 상소 운동과 더불어 지배층의 자결 항거가 잇달았습니다."
  },
  {
    id: 211,
    category: "modern",
    categoryLabel: "근·현대",
    text: "신돌석은 을사의병(민종식, 최익현 등 주도) 당시 활약한 대표적인 최초의 평민 의병장이다.",
    answer: true,
    explanation: "을사의병(1905)의 가장 큰 특징은 평민 출신 의병장(신돌석)이 등장하여 유격전을 펼쳤다는 점입니다."
  },
  {
    id: 212,
    category: "modern",
    categoryLabel: "근·현대",
    text: "정미의병(1907)은 군대 해산에 반발하여 일어났으며, 13도 창의군을 결성하고 서울 진공 작전을 전개했다.",
    answer: true,
    explanation: "해산 군인이 합류하여 화력이 강화된 정미의병은 총대장 이인영, 군사장 허위 등을 중심으로 서울로 진격하려 했습니다."
  },
  {
    id: 213,
    category: "modern",
    categoryLabel: "근·현대",
    text: "비밀 결사 단체인 신민회(1907)는 공화정체 기반의 근대 국가 수립을 지향하며 남만주 삼원보에 독립운동 기지를 건설했다.",
    answer: true,
    explanation: "신민회는 안창호, 양기탁 등이 주도했으며, 이회영 일가의 헌신으로 신흥무관학교의 전신인 신흥강습소를 세웠습니다."
  },
  {
    id: 214,
    category: "modern",
    categoryLabel: "근·현대",
    text: "보안회(1904)는 일제의 황무지 개간권 요구를 저지하는 데 성공한 대표적인 애국 계몽 단체이다.",
    answer: true,
    explanation: "보안회는 협동회 등과 연대하여 대중 집회를 열고 일제의 경제적 침탈 시도를 막아냈습니다."
  },
  {
    id: 215,
    category: "modern",
    categoryLabel: "근·현대",
    text: "근대 교육 기관인 원산학사(1883)는 정부의 주도로 세워진 최초의 관립 근대식 학교이다.",
    answer: false,
    explanation: "원산학사는 덕원 부사 정현석과 개항장 '지방 관민들의 자발적 성금'으로 세워진 최초의 '사립' 근대식 학교입니다. 관립은 육영공원(1886)입니다."
  },
  {
    id: 216,
    category: "modern",
    categoryLabel: "근·현대",
    text: "신채호가 대한매일신보에 연재한 '독사신론'은 민족을 중심에 둔 근대 민족주의 사학의 지평을 열었다.",
    answer: true,
    explanation: "독사신론은 왕조 중심 사학에서 벗어나 단군과 부여, 고구려로 이어지는 주체적인 민족사 체계를 강조했습니다."
  },
  {
    id: 217,
    category: "modern",
    categoryLabel: "근·현대",
    text: "프랑스인 법관 법률 고문 부르주아가 참여하고, 한성전기회사가 전차 노선을 개통한 시기는 대략 1890년대 후반이다.",
    answer: true,
    explanation: "서대문~홍릉 간 전차 개통은 1899년으로 대한제국 시기의 대표적인 근대 문물 도입 사례입니다."
  },
  {
    id: 218,
    category: "modern",
    categoryLabel: "근·현대",
    text: "일제가 1910년대 사법권을 박탈하고 경찰에 부여한 즉결 처분권은 조선태형령을 통해 집행되었다.",
    answer: true,
    explanation: "조선태형령(1912)은 조선인에게만 적용되는 야만적인 형벌로, 무단 통치의 본질을 보여줍니다."
  },
  {
    id: 219,
    category: "modern",
    categoryLabel: "근·현대",
    text: "대한독립군 정정 정인과 북로군정서의 서일, 김좌진 등이 연합하여 몽골군을 대파한 전투는 봉오동 전투이다.",
    answer: false,
    explanation: "김좌진의 북로군정서와 이범석 등이 청산리 골짜기에서 일본군을 대파한 것은 '청산리 대첩(1920)'입니다. 봉오동 전투는 홍범도의 대한독립군이 주도했습니다."
  },
  {
    id: 220,
    category: "modern",
    categoryLabel: "근·현대",
    text: "1920년대 초 실력 양성 운동의 일환으로 조만식 등이 물산 장려 운동을 전개하여 '내 살림 내 것으로'라는 구호를 내세웠다.",
    answer: true,
    explanation: "평양에서 시작된 물산 장려 운동은 국산품 애용을 저축·장려하여 민족 경제를 자립시키고자 했습니다."
  },
  {
    id: 221,
    category: "modern",
    categoryLabel: "근·현대",
    text: "한용운, 이상재 등이 주도한 밀립대학 설립 운동은 일제가 경성제국대학을 설립(1924)하면서 방해를 받았다.",
    answer: true,
    explanation: "일제는 한국인들의 대학 설립 열기를 무마하기 위해 관립 경성제국대학을 세워 회유했습니다."
  },
  {
    id: 222,
    category: "modern",
    categoryLabel: "근·현대",
    text: "1926년 순종의 인산일을 기해 일어난 6·10 만세 운동은 정우회 선언과 신간회 창립의 배경이 되었다.",
    answer: true,
    explanation: "6·10 만세 운동 과정에서 사회주의 세력과 민족주의 세력이 연대할 수 있는 가능성을 확인하여 민족 유일당 운동이 촉발되었습니다."
  },
  {
    id: 223,
    category: "modern",
    categoryLabel: "근·현대",
    text: "1929년 한·일 학생 간의 충돌로 광주에서 발생한 광주 학생 항일 운동은 신간회의 진상 조사단 파견으로 전국 확산되었다.",
    answer: true,
    explanation: "광주 학생 항일 운동은 3·1 운동 이후 최대 규모의 전국적 민족 운동이었습니다."
  },
  {
    id: 224,
    category: "modern",
    categoryLabel: "근·현대",
    text: "일제가 1930년대 중반 이후 시행한 남면북양 정책은 조선을 병참기지화하여 군수 물자를 수탈하기 위함이었다.",
    answer: true,
    explanation: "남쪽에는 면화, 북쪽에는 양을 기르게 하여 일본 방직 자본의 원료 부족 문제를 해결하고 경제를 통제했습니다."
  },
  {
    id: 225,
    category: "modern",
    categoryLabel: "근·현대",
    text: "대한민국 임시 정부는 1940년 충칭에서 한국광복군을 창설하고 조소앙의 삼균주의를 바탕으로 한 대한민국 건국 강령을 발표했다.",
    answer: true,
    explanation: "충칭 정착 이후 임시 정부는 여당 격인 한국독립당을 중심으로 체제를 정비하고 대일 선전포고를 준비했습니다."
  },
  {
    id: 226,
    category: "modern",
    categoryLabel: "근·현대",
    text: "한국광복군은 미 육군 첩보부대(OSS)와 합작하여 국내 진공 작전을 계획했으나 일제의 무조건 항복으로 실행되지 못했다.",
    answer: true,
    explanation: "김구 선생은 백범일지에서 국내 진공 작전 직전 일제가 항복했다는 소식을 듣고 하늘이 무너지는 듯한 아쉬움을 토로했습니다."
  },
  {
    id: 227,
    category: "modern",
    categoryLabel: "근·현대",
    text: "박은식은 '한국통사'와 '한국독립운동지혈사'를 저술하여 민족의 '국혼(國魂)'을 강조했다.",
    answer: true,
    explanation: "임시 정부 2대 대통령을 지낸 박은식은 나라의 형태는 파괴될 수 있으나 정신인 '혼'이 살아있으면 독립할 수 있다고 역설했습니다."
  },
  {
    id: 228,
    category: "modern",
    categoryLabel: "근·현대",
    text: "백남운은 유물사관을 바탕으로 '조선사회경제사'를 저술하여 세계사적 보편성 유무에 따른 식민사학의 정체성 이론을 비판했다.",
    answer: true,
    explanation: "한국사도 세계사의 발전 법칙(원시-고대-중세-근대)에 맞추어 주체적으로 발전해 왔음을 증명하여 정체성론을 정면 비박했습니다."
  },
  {
    id: 229,
    category: "modern",
    categoryLabel: "근·현대",
    text: "1930년대 전반 이윤재, 최현배 등이 주도한 조선어학회는 맞춤법 통일안 제정 및 외래어 표기법 제정을 추진했다.",
    answer: true,
    explanation: "조선어학회는 '우리말 큰사전' 편찬을 시도하다가 1942년 조선어학회 사건으로 대거 구속되었습니다."
  },
  {
    id: 230,
    category: "modern",
    categoryLabel: "근·현대",
    text: "1946년 좌우 대립을 완화하기 위해 여운형과 김규식 등이 중심이 되어 '좌우합작 7원칙'을 발표했다.",
    answer: true,
    explanation: "미소공동위원회의 결렬과 이승만의 정읍발언(단독정부 수립론)에 대응하여 미군정의 지지를 받으며 추진된 운동입니다."
  },
  {
    id: 231,
    category: "modern",
    categoryLabel: "근·현대",
    text: "1948년 김구와 김규식은 단독 정부 수립을 막기 위해 38선을 넘어 평양에서 열린 남북 연석회의에 참석했다.",
    answer: true,
    explanation: "김구 선생은 '삼천만 동포에게 읍고함'을 발표하며 통일 정부 수립을 위한 마지막 노력을 기울였습니다."
  },
  {
    id: 232,
    category: "modern",
    categoryLabel: "근·현대",
    text: "6·25 전쟁 중 피난 수도였던 부산에서 이승만 정부는 대통령 직선제 개헌안인 '사사오입 개헌'을 통과시켰다.",
    answer: false,
    explanation: "1952년 부산 전시 상황에서 통과된 직선제 개헌은 '발췌 개헌'입니다. 사사오입 개헌(1954)은 초대 대통령에 한해 중임 제한을 철폐한 개헌입니다."
  },
  {
    id: 233,
    category: "modern",
    categoryLabel: "근·현대",
    text: "이승만 정부 시기 진보당의 조봉암이 간첩 혐의로 사형에 처해진 사건은 '진보당 사건(1958)'이다.",
    answer: true,
    explanation: "평화통일론을 주장하며 대선에서 선전한 조봉암을 견제하기 위해 자행된 정적 제거 사건이었습니다."
  },
  {
    id: 234,
    category: "modern",
    categoryLabel: "근·현대",
    text: "4·19 혁명 결과 수립된 장면 내각은 대통령 중심제와 단원제 국회를 채택했다.",
    answer: false,
    explanation: "장면 내각은 한국 역사상 유일한 '의원 내각제(국무총리가 실권 보유)' 체제였으며, 국회는 민의원과 참의원의 '양원제'였습니다."
  },
  {
    id: 235,
    category: "modern",
    categoryLabel: "근·현대",
    text: "박정희 정부는 1972년 7·4 남북 공동 성명을 발표하여 자주, 평화, 민족 대단결의 통일 3대 원칙을 정립했다.",
    answer: true,
    explanation: "분단 이후 최초로 남북이 합의한 성명이었으나, 직후 양측은 유신 체제와 사회주의 헌법을 강화하는 등 독재에 악용했습니다."
  },
  {
    id: 236,
    category: "modern",
    categoryLabel: "근·현대",
    text: "박정희 정부의 유신 헌법(1972)은 대통령의 임기를 6년으로 연장하고 통일주체국민회의에서 간선으로 선출하도록 했다.",
    answer: true,
    explanation: "유신 헌법은 대통령에게 국회 해산권, 국회의원 3분의 1 추천권, 긴급조치권 등 무소불위의 권력을 부여했습니다."
  },
  {
    id: 237,
    category: "modern",
    categoryLabel: "근·현대",
    text: "노태우 정부 시기 남북한은 UN에 동시 가입하고, '남북 기본 합의서'를 채택하였다.",
    answer: true,
    explanation: "북방 외교의 성과로 1991년 남북 기본 합의서와 한반도 비핵화 공동 선언이 연이어 발표되었습니다."
  },
  {
    id: 238,
    category: "modern",
    categoryLabel: "근·현대",
    text: "김영삼 정부는 역사 바로세우기의 일환으로 전두환, 노태우 두 전직 대통령을 구속 수사하고 총독부 건물을 철거했다.",
    answer: true,
    explanation: "문민정부는 12·12 쿠데타와 5·18 진압에 대한 책임을 물어 법정 단죄를 내렸습니다."
  },
  {
    id: 239,
    category: "modern",
    categoryLabel: "근·현대",
    text: "노무현 정부 시기에는 개성 공단 가동이 시작되었고 제2차 남북 정상 회담(10·4 남북 공동 선언)이 개최되었다.",
    answer: true,
    explanation: "김대중 정부의 대북 성과를 계승하여 2007년 고 평양을 방문해 공동 선언을 이끌어냈습니다."
  },
  {
    id: 240,
    category: "modern",
    categoryLabel: "근·현대",
    text: "신간회의 자매 단체인 '근우회(1927)'는 여성 지도자 양성과 여성 지위 향상, 단발령 반대를 주장했다.",
    answer: false,
    explanation: "근우회는 여성 평등과 인권 향상, 조혼 폐지 등을 주장한 유일당 여성 단체입니다. 단발령 반대는 한참 전인 위정척사파의 주장입니다."
  },

  // [기출 단골 지역사 & 문화유산 심화 문항]
  {
    id: 241,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "공주는 백제 무령왕릉이 위치한 곳이며, 망이·망소이의 난이 발생한 명학소가 있던 지역이다.",
    answer: true,
    explanation: "웅진(공주)은 백제의 수도였을 뿐만 아니라, 고려 시대 특수 행정 구역 민란인 명학소의 난(공주 명학소)이 터진 곳입니다."
  },
  {
    id: 242,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "부여(사비)에는 백제 금동대향로가 출토된 능산리 고분군과 정림사지 5층 석탑이 있다.",
    answer: true,
    explanation: "부여 지역의 대표 문화재로 백제 성왕의 사비 천도 이후 찬란한 문화가 꽃핀 장소입니다."
  },
  {
    id: 243,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "평양은 안학궁 터가 있는 고구려의 도읍지였으며, 근대기 제너럴 셔먼호 사건이 발생한 장소이다.",
    answer: true,
    explanation: "장수왕 천도 이후 고구려의 중심지였으며, 조선 말기 평양 감사 박규수가 제너럴 셔먼호를 불태운 무대이기도 합니다."
  },
  {
    id: 244,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "강화도는 고려 고종 대 외규장각이 설치되어 조미수호통상조약이 체결된 역사의 현장이다.",
    answer: false,
    explanation: "외규장각은 조선 정조 때 설치되었습니다. 또한 강화도 조약(1876)은 강화도에서 체결되었으나 미국과의 조미수호통상조약(1882)은 제물포(인천) 인근에서 체결되었습니다."
  },
  {
    id: 245,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "경주는 신라의 도읍지로 동궁과 월지(안압지), 첨성대, 그리고 무열왕릉비가 위치해 있다.",
    answer: true,
    explanation: "천년고도 경주는 신라 문화의 정수가 보존된 유네스코 세계문화유산 도시입니다."
  },
  {
    id: 246,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "인천은 병인양요 당시 양헌수 부대가 정족산성에서 프랑스군을 격퇴한 현장이다.",
    answer: false,
    explanation: "정족산성과 전등사가 위치한 장소는 인천 광역시 관할의 '강화도'입니다. 내륙 인천과 강화도 역사를 분리하는 문제가 종종 출제됩니다."
  },
  {
    id: 247,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "제주도는 삼별초의 마지막 항전지였으며, 구한말 유배된 김정희가 추사체를 완성하고 세한도를 그린 곳이다.",
    answer: true,
    explanation: "제주 항파두리성은 삼별초 대몽 항쟁의 종착지였고, 김정희 유배지로도 유명합니다."
  },
  {
    id: 248,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "익산에는 백제 무왕 때 창건된 미륵사지 석탑이 있으며, 견훤이 유폐되었던 금산사가 위치해 있다.",
    answer: false,
    explanation: "미륵사지 석탑은 익산이 맞으나, 견훤이 아들 신검에 의해 유폐되었던 금산사는 전북 '김제'에 위치해 있습니다."
  },
  {
    id: 249,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "울릉도와 독도는 삼국시대 지증왕 때 이사부가 우산국을 복속하면서 우리 영토로 편입되었다.",
    answer: true,
    explanation: "512년 지증왕 대 신라 영토가 된 이래 대한민국의 고유 영토로 이어져 오고 있습니다."
  },
  {
    id: 250,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "대구는 구한말 국채 보상 운동이 발단이 된 도시이며, 6·25 전쟁 당시 임시 수도 역할을 수행했다.",
    answer: false,
    explanation: "국채 보상 운동(1907, 서상돈 등)의 시작점은 대구가 맞으나, 6·25 전쟁 당시 최종 임시 수도 역할을 수행한 곳은 '부산'입니다."
  },
  {
    id: 251,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "수원은 정조가 세운 화성이 있으며, 일제 강점기 제암리 학살 사건이 발생한 인근 지역이다.",
    answer: true,
    explanation: "화성시 제암리는 당시 수원군 관할로, 3·1 운동에 대한 일제의 잔혹한 보복 학살이 자행된 가슴 아픈 현장입니다."
  },
  {
    id: 252,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "진주는 조선 후기 임술 농민 봉기의 시발점이었으며, 일제 강점기 형평 운동(백정 신분 해방 운동)이 시작된 곳이다.",
    answer: true,
    explanation: "1862년 유계춘의 진주 민란과 1923년 조선형평사 창립 모두 경남 진주를 무대로 했습니다."
  },
  {
    id: 253,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "안동은 유네스코 세계유산인 하회마을과 도산서원이 있으며, 고려 공민왕이 홍건적을 피해 몽진했던 장소이다.",
    answer: true,
    explanation: "당시 복주로 불렸던 안동은 유교 문화재의 보고이자 고려 왕실의 피난처였습니다."
  },
  {
    id: 254,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "원산은 1876년 강화도 조약에 의해 최초로 개항된 포구이다.",
    answer: false,
    explanation: "강화도 조약으로 '최초'로 개항된 곳은 부산(1877)이며, 이후 원산(1880), 인천(1883)이 차례로 개항되었습니다."
  },
  {
    id: 255,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "간도는 숙종 때 백두산 정계비가 세워진 영토 분쟁 지역으로, 대한제국 시기 이범윤이 관리사로 파견되었다.",
    answer: true,
    explanation: "고종은 간도를 변계 지역으로 인식하여 국방 및 행정 관할권을 행사하고자 이범윤을 간도 관리사로 파견했습니다."
  },
  {
    id: 256,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "조선 시대 의궤와 왕실 도서가 대량 보관되어 있던 외규장각은 원래 강화도 행궁 내에 설치되어 있었다.",
    answer: true,
    explanation: "정조는 왕실의 중요 문서를 안전하게 보관하기 위해 강화도에 외규장각을 지었습니다."
  },
  {
    id: 257,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "고려 시대 금속 활자로 찍어낸 현존 최고(最古)의 불경인 '직지심체요절'이 간행된 사찰은 합천 해인사이다.",
    answer: false,
    explanation: "직지심체요절은 1377년 '청주 흥덕사'에서 간행되었습니다. 해인사는 고려 팔만대장경판이 보관되어 있는 곳입니다."
  },
  {
    id: 258,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "조선 후기 영남 남인 세력의 학문적 영수였던 이황을 기리기 위해 건립된 서원은 도산서원이다.",
    answer: true,
    explanation: "퇴계 이황의 학문과 덕행을 추모하기 위해 제자들이 안동에 건립한 서원입니다."
  },
  {
    id: 259,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "조선 성종 때 성현 등이 왕명을 받아 음악의 역사와 이론을 집대성하여 편찬한 서적은 '악학궤범'이다.",
    answer: true,
    explanation: "악학궤범은 조선 전기 궁중 음악(아악, 당악, 향악)의 악기 배정 및 연주법을 기록한 귀중한 음악 총서입니다."
  },
  {
    id: 260,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "조선 후기 화가 김홍도는 서민들의 일상생활을 해학적으로 그린 풍속화(씨름, 서당 등)로 유명하다.",
    answer: true,
    explanation: "정조의 총애를 받은 도화서 화원 김홍도는 단원풍속도첩을 통해 당시 기층민의 삶을 생생히 묘사했습니다."
  },
  {
    id: 261,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "조선 전기 세종 때 쓰여진 '삼강행실도'는 백성들에게 불교의 인과응보 사상을 널리 알리기 위한 그림책이다.",
    answer: false,
    explanation: "삼강행실도는 불교가 아니라 모범이 될 만한 충신, 효자, 열녀의 사적을 글과 그림으로 설명한 '유교 윤리 교육서'입니다."
  },
  {
    id: 262,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "신라의 승려 원측은 당나라에 건너가 현장 밑에서 유식학을 배우고 독자적인 유식 사상을 정립했다.",
    answer: true,
    explanation: "원측은 당나라 자은사와 서명사에서 활약하며 유식학의 대가로 칭송받은 국제적 승려입니다."
  },
  {
    id: 263,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "고려 중기 숙종 때 대각국사 의천은 타락한 불교계를 정화하기 위해 결사 운동을 전개했다.",
    answer: false,
    explanation: "불교 결사 운동(결사학 개혁)을 주도한 승려는 고려 후기의 '지눌(수선사 결사)'과 '요세(백련 결사)'입니다. 의천은 종파 통합에 주력했습니다."
  },
  {
    id: 264,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "조선 후기 이수광이 저술한 '지봉유설'은 서학(천주교)과 세계 지식을 우리나라에 최초로 소개한 백과사전식 저술이다.",
    answer: true,
    explanation: "광해군 때 편찬된 지봉유설은 중국을 오간 사신들을 통해 얻은 마테오 리치의 천주실의 등 새로운 학문을 소개해 실학의 선구적 역할을 했습니다."
  },
  {
    id: 265,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "조선 후기 영조의 명으로 편찬된 '동국문헌비고'는 우리나라의 정치, 경제, 문화 제도를 정리한 방대한 백과사전이다.",
    answer: true,
    explanation: "홍봉한 등이 주도하여 만든 한국학 백과사전으로 영조 대 국학 연구의 절정을 보여줍니다."
  },
  {
    id: 266,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "조선 전기 성종 때 편찬된 '동국통감'은 서거정 등이 단군조선부터 고려 말까지의 역사를 서술한 최초의 관찬 통사이다.",
    answer: true,
    explanation: "외세의 간섭 없이 우리 역사를 체계적으로 정리한 편년체 통사로서 사학사적 가치가 큽니다."
  },
  {
    id: 267,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "조선 후기 실학자 유득공의 '발해고'는 발해를 우리 역사에 편입시켜 '남북국 시대'라는 용어를 정착시켰다.",
    answer: true,
    explanation: "신라 위주의 역사관에서 벗어나 만주 대륙을 호령한 발해를 온전히 아우른 선구적 역사학 서적입니다."
  },
  {
    id: 268,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "한성순보(1883)는 통리기무아문 산하 박문국에서 발행한 우리나라 최초의 근대적 신문이자 영문 신문이다.",
    answer: false,
    explanation: "최초의 근대적 신문은 맞으나 영문 신문이 아닌 순수 한문으로 발행된 관보 성격의 신문이었습니다. (최초의 영문 신문은 독립신문 등의 영문판입니다.)"
  },
  {
    id: 269,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "신채호는 조선혁명선언(1923)을 집필하여 의열단의 파괴·암살을 통한 직접 혁명 노선을 이론적으로 뒷받침했다.",
    answer: true,
    explanation: "김원봉의 요청으로 작성된 이 선언은 자치론과 외교론을 배격하고 민중의 폭력적 직접 혁명만이 독립의 유일한 길임을 선언했습니다."
  },
  {
    id: 270,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "일제 강점기 문학인 이육사와 윤동주는 일제의 민족 말살 통치에 맞서 저항 시를 남긴 대표적인 저항 시인들이다.",
    answer: true,
    explanation: "'광야', '절정'의 이육사와 '서시', '별 헤는 밤'의 윤동주는 식민지 현실 극복을 시와 행동으로 노래하다 옥사했습니다."
  },
  {
    id: 271,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "구석기 시대의 대표적인 유적지인 공주 석장리와 연천 전곡리에서는 아슐리안형 주먹도끼가 출토되었다.",
    answer: true,
    explanation: "특히 연천 전곡리의 주먹도끼는 동아시아에는 아슐리안형 도끼가 없다는 모비우스 학설을 전면 뒤집은 세계적 발견이었습니다."
  },
  {
    id: 272,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "신석기 시대의 주거 형태는 주로 움집이었으며, 바닥은 원형이거나 모서리가 둥근 사각형 구조였다.",
    answer: true,
    explanation: "강가나 해안가에 지어진 신석기 움집은 중앙에 화덕이 위치하는 특징을 지닙니다."
  },
  {
    id: 273,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "청동기 시대의 움집은 점차 지상 가옥화되었으며 화덕이 한쪽 벽면으로 이동하는 변화를 보였다.",
    answer: true,
    explanation: "청동기 시대에는 주거 공간이 평야나 구릉 지대로 이동하면서 내부 구조가 더 효율적으로 발전했습니다."
  },
  {
    id: 274,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "철기 시대에는 무덤 양식으로 널무덤(토광묘)과 독무덤(옹관묘)이 유행하였다.",
    answer: true,
    explanation: "고인돌과 돌널무덤 중심이던 청동기 시대와 구별되는 철기 시대 고유의 무덤 형태입니다."
  },
  {
    id: 275,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "부여와 고구려의 법률에는 도둑질한 자에게 12배로 배상하게 하는 '1책 12법'이 공통으로 존재했다.",
    answer: true,
    explanation: "초기 국가들의 엄격한 사유 재산 보호 관념을 보여주는 형법 요소입니다."
  },
  {
    id: 276,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "삼한의 경제적 특징으로는 저수지인 제천 의림지, 밀양 수산제 등이 축조되어 벼농사가 발달했다는 점이다.",
    answer: true,
    explanation: "삼한(특히 마한, 변한) 지역은 수리 시설을 확충하여 대규모 농경 문화를 일구어냈습니다."
  },
  {
    id: 277,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "고구려 고국천왕은 재상 을파소의 건의를 받아들여 봄에 곡식을 빌려주고 가을에 갚게 하는 진대법을 실시했다.",
    answer: true,
    explanation: "우리 역사상 최초의 관할 빈민 구제 제도(춘대추납)로, 왕권 강화와 자선책의 일환이었습니다."
  },
  {
    id: 278,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "백제 성왕은 국호를 '남부여'로 일시 변경하고 사비로 천도하여 백제의 중흥을 도모했다.",
    answer: true,
    explanation: "부여 씨의 정통성을 강조하기 위해 남부여라는 국호를 썼으며 관산성 전투에서 전사하기 전까지 개혁을 주도했습니다."
  },
  {
    id: 279,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "신라 선덕여왕 대에는 황룡사 9층 목탑을 건립하고 불교의 권위로 주변 9개 세력의 침략을 막고자 했다.",
    answer: true,
    explanation: "자장율사의 건의로 지어진 황룡사 탑은 호국 불교의 상징적 건축물이었습니다."
  },
  {
    id: 280,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "6두품 출신의 최치원은 아찬 관직까지 승진하여 신라 하대의 개혁안을 성공적으로 정착시켰다.",
    answer: false,
    explanation: "6두품의 관직 승진 상한선은 '아찬'이 아닌 '아찬(6관등)'까지였습니다. 또한 최치원의 시무 10여 조는 진골 귀족들의 반발로 채택되지 못했습니다."
  },
  {
    id: 281,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "발해의 정당성 최고 장관인 '대내상'은 3성의 국정을 총괄하는 실질적인 수상이자 권력자였다.",
    answer: true,
    explanation: "발해는 좌사정과 우사정으로 6부를 나누어 통제했으며 정당성의 대내상이 국정을 총괄했습니다."
  },
  {
    id: 282,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "고려 광종 때 후주 출신 쌍기의 건의로 도입된 과거제에는 무과가 정기적으로 치러져 무신을 대거 양성했다.",
    answer: false,
    explanation: "고려 시대 과거제에는 '무과'가 거의 시행되지 않았습니다. 문과, 잡과, 승과 중심으로 운영되어 무신 차별의 원인이 되었습니다."
  },
  {
    id: 283,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "고려 문종 때 제정된 공음전은 5품 이상의 고관에게 지급되어 자손에게 세습이 가능한 특권 토지였다.",
    answer: true,
    explanation: "음서 제도와 함께 문벌 귀족 사회의 가문 권력을 세습하게 만든 경제적 장치였습니다."
  },
  {
    id: 284,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "고려 무신 집권기 최충헌은 신변 경호 기구인 삼별초와 함께 교정도감을 통해 무소불위의 권력을 행사했다.",
    answer: false,
    explanation: "최충헌의 사병 기구는 '도방'입니다. 삼별초는 최충헌의 아들인 '최우' 집권기에 야별초를 바탕으로 신설 및 조직된 군사 기구입니다."
  },
  {
    id: 285,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "원 간섭기 고려 왕실의 호칭은 조(祖)나 종(宗) 대신 원에 충성한다는 뜻의 충(忠)왕 체제로 격하되었다.",
    answer: true,
    explanation: "제후국으로 위상이 떨어지면서 폐하를 전하로, 태자를 세자로 부르는 격하 과정을 겪었습니다."
  },
  {
    id: 286,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "고려 말 우왕 대에 최영과 이성계는 요동 정벌을 떠나기 전 '4불가론'을 두고 격렬하게 연대했다.",
    answer: false,
    explanation: "4불가론을 내세워 요동 정벌을 격렬히 '반대'한 인물은 이성계입니다. 최영은 요동 정벌을 강행하고자 주도했습니다."
  },
  {
    id: 287,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "고려의 은병(활구)은 지형 모양을 본떠 만든 고액 화폐로, 주로 상업 중심지인 벽란도와 개경 시전에서 유통되었다.",
    answer: true,
    explanation: "활구는 고려 지형을 본뜬 은 화폐였으나 가치가 너무 높아 일반 백성들의 일상 거래에는 잘 쓰이지 못했습니다."
  },
  {
    id: 288,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "고려 의천이 개창한 해동 천태종은 선종의 수행 방법을 포용하되 교리를 중심에 두는 교관겸수를 강조했다.",
    answer: true,
    explanation: "의천은 교종 승려로서 이론 공부(교)와 실천 참선(관)을 병행해야 함을 설파했습니다."
  },
  {
    id: 289,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "조선 태종 때 설치된 사간원은 관리의 비리를 감찰하고 탄핵하는 기능을 전담했다.",
    answer: false,
    explanation: "왕에게 간쟁하고 간언하는 기구가 '사간원'입니다. 관리 감찰과 탄핵을 전담한 기구는 '사헌부'입니다."
  },
  {
    id: 290,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "조선 시대 의정부의 정1품 정승인 영의정, 좌의정, 우의정은 국가의 주요 정책을 심의하고 국왕에게 합의 조율안을 올렸다.",
    answer: true,
    explanation: "의정부 서사제 하에서 재상 중심 정치를 실현하는 최고 행정 기구의 수장들이었습니다."
  },
  {
    id: 291,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "조선 성종 대 완성된 '국조오례의'는 길례, 가례, 빈례, 군례, 흉례 등 국가의 5가지 의례 규범을 정립한 서적이다.",
    answer: true,
    explanation: "유교적 국가 의례 체제를 완성하여 성리학적 질서를 사회 전반에 안착시키는 역할을 했습니다."
  },
  {
    id: 292,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "중종 때 일어난 기묘사화는 사림파 조광조 일파가 위훈 삭제(거짓 공훈 박탈)를 추진하자 훈구파가 반발하여 일으킨 사건이다.",
    answer: true,
    explanation: "주초위왕(走肖爲王) 나뭇잎 조작 사건을 통해 조광조 일파는 제거되고 사림은 일시적으로 후퇴했습니다."
  },
  {
    id: 293,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "조선 시대 향촌 사회의 자치 기구인 서원은 선현의 제사와 학문 연구, 그리고 지방관의 행정 명령 집행을 전담했다.",
    answer: false,
    explanation: "서원은 선현 제사와 교육을 담당하는 사설 기관이지, '지방관의 행정 명령을 집행하는 관청'이 아닙니다."
  },
  {
    id: 294,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "광해군 때 체결된 기유약조(1609)를 통해 임진왜란 이후 중단되었던 일본(대마도)과의 국교 및 부산포 개항이 공식 재개되었다.",
    answer: true,
    explanation: "조선은 왜관을 부산포에 다시 설치하고 제한된 범위 내에서 무역을 허락했습니다."
  },
  {
    id: 295,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "조선 후기 효종의 사망으로 촉발된 제1차 예송(기해예송) 당시 남인은 3년 상을, 서인은 1년 상(기년설)을 주장했다.",
    answer: true,
    explanation: "서인은 효종을 차남으로 보아 가례를 적용하려 했고, 남인은 왕위 계승자로서 장남의 대우를 해야 한다고 맞섰습니다."
  },
  {
    id: 296,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "조선 후기 정조 때 창설된 장용영은 국왕의 친위 부대로서 한양 중심의 내영과 화성 중심의 외영 체제로 운영되었다.",
    answer: true,
    explanation: "정조는 강력한 군사적 기반인 장용영을 통해 노론 귀족 세력을 견제하고 개혁을 추진했습니다."
  },
  {
    id: 297,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "조선 후기 대동법의 확산으로 등장한 '공인'은 관청에서 공가를 받아 물품을 조달한 어용 상인들이었다.",
    answer: true,
    explanation: "공인의 대량 물품 조달 활동은 시전 상인들과 독립 사상들의 성장을 유도하여 도매 시장 발달의 밑거름이 되었습니다."
  },
  {
    id: 298,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "조선 후기 실학자 중 상공업 중심 개혁을 강조한 유수원은 '우서'를 저술하여 사농공상의 신분 평등과 직업 전문화를 주장했다.",
    answer: true,
    explanation: "북학파(중상학파)의 선구자인 유수원은 상업을 천시하는 풍조를 버리고 양반도 상업에 종사할 수 있어야 한다고 보았습니다."
  },
  {
    id: 299,
    category: "culture",
    categoryLabel: "문화·사상",
    text: "정약용이 저술한 '목민심서'는 중앙 관제의 개혁 방향과 국가 전반의 행정 법제를 구상한 행정 지침서이다.",
    answer: false,
    explanation: "목민심서는 '지방관(수령)이 지켜야 할 마음가짐과 백성을 다스리는 도리'를 쓴 책입니다. 중앙 관제와 국가 행정 개혁안을 담은 책은 '경세유표'입니다."
  },
  { id: 300, category: "culture", categoryLabel: "문화·사상", text: "조선 후기 국학 연구의 진전으로 정약용의 아들 정학유는 농가 월령과 세시풍속을 노래한 '농가월령가'를 지었다.", answer: true, explanation: "달거리에 맞추어 농가에서 해야 할 일과 풍속을 순한글 가사 형식으로 표현하여 당시 농촌 사회상을 잘 보여주는 명작입니다." },

  // [선사·고대 추가 문항 세트]
  { id: 301, category: "prehistoric", categoryLabel: "선사·고대", text: "구석기 시대의 찌개, 주먹도끼, 씀배찌르개 등은 간석기를 대표하는 유물이다.", answer: false, explanation: "주먹도끼와 씀배찌르개는 돌을 깨뜨려 만든 '땐석기'입니다. 간석기는 신석기 시대 이후에 등장합니다." },
  { id: 302, category: "prehistoric", categoryLabel: "선사·고대", text: "신석기 시대 사람들은 가락바퀴와 뼈바늘을 사용하여 옷이나 그물을 만들었다.", answer: true, explanation: "가락바퀴와 뼈바늘의 발견은 신석기 시대에 원시적인 수공업 및 의생활이 시작되었음을 보여줍니다." },
  { id: 303, category: "prehistoric", categoryLabel: "선사·고대", text: "신석기 시대의 대표적인 유적지인 부산 동삼동 패총에서는 조개껍데기 가면이 출토되었다.", answer: true, explanation: "부산 동삼동 패총에서는 당시 신석기인들의 예술 및 원시 신앙 사상을 엿볼 수 있는 조개껍데기 가방·가면이 나왔습니다." },
  { id: 304, category: "prehistoric", categoryLabel: "선사·고대", text: "청동기 시대에는 지배자의 무덤으로 고인돌, 돌널무덤(석관묘) 등이 주로 축조되었다.", answer: true, explanation: "청동기 시대에는 사유재산과 계급이 분화되면서 군장의 권력을 과시하기 위한 고인돌이 대거 제작되었습니다." },
  { id: 305, category: "prehistoric", categoryLabel: "선사·고대", text: "청동기 시대의 대표적인 토기로는 표면에 아무런 무늬가 없는 미송리식 토기와 민무늬 토기가 있다.", answer: true, explanation: "청동기 시대에는 무늬가 없는 민무늬 토기와 함께, 고조선의 세력 범위를 알려주는 의주 미송리식 토기가 사용되었습니다." },
  { id: 306, category: "prehistoric", categoryLabel: "선사·고대", text: "비파형 동검과 거친무늬 거울은 청동기 시대를, 세형 동검과 잔무늬 거울은 철기 시대를 대표한다.", answer: true, explanation: "비파형 동검은 청동기 전기를, 세형 동검은 한반도 내에서 자생적으로 발전한 독자적인 철기 시대의 청동기 문화를 상징합니다." },
  { id: 307, category: "prehistoric", categoryLabel: "선사·고대", text: "철기 시대에는 한반도 내에서 청동기를 직접 주조하고 제작하기 위해 '거푸집'을 사용하였다.", answer: true, explanation: "전국 여러 철기 유적지에서 거푸집(용범)이 발견되어, 한반도에서 독자적으로 청동기를 주조했음이 증명되었습니다." },
  { id: 308, category: "prehistoric", categoryLabel: "선사·고대", text: "철기 시대 유적지인 창원 다호리 무덤에서 붓이 출토되어 당시 한자가 사용되었음을 알 수 있다.", answer: true, explanation: "창원 다호리 붓과 명도전 등의 중국 화폐는 당시 중국과의 활발한 교류 및 한자(문자) 사용을 보여주는 유물입니다." },
  { id: 309, category: "prehistoric", categoryLabel: "선사·고대", text: "고조선은 기원전 3세기경 부왕, 준왕 등 강력한 왕이 등장하여 왕위를 부자 세습하였다.", answer: true, explanation: "고조선 후기에는 강력한 군주가 등장하여 관직(상, 대부, 장군)을 정비하고 왕위를 세습할 정도로 성장했습니다." },
  { id: 310, category: "prehistoric", categoryLabel: "선사·고대", text: "위만은 한나라의 혼란기를 틈타 고조선으로 망명한 뒤, 준왕을 몰아내고 스스로 왕위에 올랐다.", answer: true, explanation: "기원전 194년 위만의 집원으로 고조선은 본격적으로 우수한 철기 문화를 수용하며 비약적으로 발전했습니다." },
  { id: 311, category: "prehistoric", categoryLabel: "선사·고대", text: "위만조선은 한나라와 한반도 남방의 진(辰)나라 사이에서 중계 무역을 독점하다가 침략을 받았다.", answer: true, explanation: "지리적 이점을 활용한 중계 무역으로 막대한 이익을 취하자, 이에 불만을 품은 한나라 무제가 군대를 이끌고 침공했습니다." },
  { id: 312, category: "prehistoric", categoryLabel: "선사·고대", text: "한나라의 침략으로 고조선의 수도인 국내성이 함락되면서 고조선은 최종 멸망하였다.", answer: false, explanation: "고조선의 수도는 국내성이 아니라 '왕검성'입니다. 기원전 108년 왕검성이 함락되며 멸망했습니다. (국내성은 고구려의 도읍입니다.)" },
  { id: 313, category: "prehistoric", categoryLabel: "선사·고대", text: "부여는 왕 아래에 마가, 우가, 저가, 구가 등의 대가들이 사출도를 독자적으로 지배했다.", answer: true, explanation: "부여는 5부족 연맹체 국가로, 가축의 이름을 딴 가(加)들이 지방 세력권인 사출도를 다스리는 족장 사회의 특징을 보였습니다." },
  { id: 314, category: "prehistoric", categoryLabel: "선사·고대", text: "고구려에는 부족장 세력인 대가들이 모여 국가 중대사를 결정하는 합좌 기구인 제가회의가 있었다.", answer: true, explanation: "부족장 출신의 대가(加)들이 모여 전쟁, 형벌 등 국가의 중대사를 민주적으로 결정했던 고구려의 귀족 회의 기구입니다." },
  { id: 315, category: "prehistoric", categoryLabel: "선사·고대", text: "옥저와 동예는 고구려의 압박을 받아 왕이 등장하지 못하고 읍군, 삼로 등의 군장이 부족을 다스렸다.", answer: true, explanation: "옥저와 동예는 군장 국가 단계에 머물렀으며, 군주(왕) 없이 읍군, 삼로라 불리는 군장들이 부족을 통치했습니다." },
  { id: 316, category: "prehistoric", categoryLabel: "선사·고대", text: "동예에는 씨족 사회의 전통이 남아있어 같은 성씨끼리 혼인하지 않는 '책화'의 풍습이 엄격했다.", answer: false, explanation: "같은 씨족끼리 혼인하지 않는 풍습은 '족외혼'입니다. '책화'는 다른 부족의 영역을 침범했을 때 배상하게 한 제도입니다." },
  { id: 317, category: "prehistoric", categoryLabel: "선사·고대", text: "동예는 특산물로 단궁(짧은 활), 과하마(키 작은 말), 반어피(바다표범 가죽)가 유명했다.", answer: true, explanation: "동예 지역의 특산물 3대장(단궁, 과하마, 반어피)은 한능검에서 동예를 구별하는 가장 핵심적인 키워드입니다." },
  { id: 318, category: "prehistoric", categoryLabel: "선사·고대", text: "벼농사가 발달했던 삼한 사회는 매년 5월 수릿날과 10월 계절제에 제천 행사를 열었다.", answer: true, explanation: "농경 중심이었던 삼한(마한·진한·변한)에서는 씨를 뿌린 후(5월)와 추수한 후(10월)에 각각 성대한 축제를 열었습니다." },
  { id: 319, category: "prehistoric", categoryLabel: "선사·고대", text: "삼한 중 변한 지역은 철이 풍부하여 덩이쇠를 화폐처럼 사용하고 왜와 낙랑에 수출했다.", answer: true, explanation: "변한의 풍부한 철 생산 체제와 기반은 훗날 이 지역에서 성장하는 가야 연맹(특히 금관가야)으로 고스란히 이어집니다." },
  { id: 320, category: "prehistoric", categoryLabel: "선사·고대", text: "고구려 태조왕은 옥저를 복속시키고 계루부 고씨의 왕위 세습권을 확립하여 고대 국가의 기틀을 다졌다.", answer: true, explanation: "태조왕은 영토 확장과 더불어 부족 연맹체에서 국왕 중심의 중앙 집권 국가로 나아가는 전기를 마련한 왕입니다." },
  { id: 321, category: "prehistoric", categoryLabel: "선사·고대", text: "고구려 미천왕은 서안평을 점령하고 낙랑군을 축출하여 한나라 세력을 완전히 몰아냈다.", answer: true, explanation: "미천왕은 대외 팽창을 통해 대동강 유역을 확보하고 고구려의 영토적 기반을 크게 넓히는 업적을 세웠습니다." },
  { id: 322, category: "prehistoric", categoryLabel: "선사·고대", text: "백제 고이왕은 6좌평 제도와 관등제를 정비하고 관리의 공복(자, 단, 비, 녹)을 제정했다.", answer: true, explanation: "고이왕은 한강 유역을 안정시키고 국가 관제와 행정 체제를 체계화하여 백제 고대 국가 체제의 틀을 완성했습니다." },
  { id: 323, category: "prehistoric", categoryLabel: "선사·고대", text: "백제 침류왕은 동진의 승려 마라난타를 통해 불교를 받아들여 공인하였다.", answer: true, explanation: "백제는 침류왕 대에 이르러 남중국(동진)으로부터 불교를 수용하여 다원화된 사상을 왕권 중심으로 결속시켰습니다." },
  { id: 324, category: "prehistoric", categoryLabel: "선사·고대", text: "신라 내물 마립간은 고구려 광개토 대왕의 군사적 도움을 받아 왜구의 침입을 격퇴했다.", answer: true, explanation: "400년 가야와 왜의 연합군이 신라를 공격하자, 내물 마립간의 구원 요청을 받은 광개토 대왕이 5만 대군을 보내 왜구를 소탕했습니다." },
  { id: 325, category: "prehistoric", categoryLabel: "선사·고대", text: "광개토 대왕의 신라 구원 사건 결과, 가야 연맹의 중심지가 대가야에서 금관가야로 이동하였다.", answer: false, explanation: "반대입니다. 고구려군의 공격으로 낙동강 유역의 금관가야가 타격을 입어, 중심지가 고령의 '대가야'로 이동하게 되었습니다." },
  { id: 326, category: "prehistoric", categoryLabel: "선사·고대", text: "광개토 대왕의 신라 내정 간섭 사실은 경주 호우총에서 출토된 '호우명 그릇'을 통해 증명된다.", answer: true, explanation: "호우명 그릇 밑바닥에는 '광개토지호태왕'이라는 글자가 새겨져 있어 당시 신라와 고구려의 긴밀한 종속 관계를 증명합니다." },
  { id: 327, category: "prehistoric", categoryLabel: "선사·고대", text: "백제 개로왕은 고구려 장수왕의 침략에 맞서 사비성을 지키다가 전사하였다.", answer: false, explanation: "장수왕의 남진 정책으로 백제의 수도 '한성(위례성)'이 함락되고 개로왕이 전사했습니다. 사비성은 성왕 때 천도한 곳입니다." },
  { id: 328, category: "prehistoric", categoryLabel: "선사·고대", text: "한성이 함락된 후 백제 문주왕은 웅진(공주)으로 도읍을 옮겨 국가적 위기를 타개하려 했다.", answer: true, explanation: "475년 한성을 잃은 백제는 급히 방어에 유리한 산악 지형인 웅진(공주)으로 내려가 조정을 재정비했습니다." },
  { id: 329, category: "prehistoric", categoryLabel: "선사·고대", text: "백제 무령왕릉은 중국 남조(양나라)의 영향을 받은 벽돌무덤 양식으로 축조되었다.", answer: true, explanation: "무령왕릉은 중국 남조 조형 양식인 벽돌무덤으로 만들어졌으며, 피장자의 신원을 알려주는 지석이 함께 발견되었습니다." },
  { id: 330, category: "prehistoric", categoryLabel: "선사·고대", text: "신라 눌지 마립간은 백제 비유왕과 함께 나·제 동맹(433)을 체결하여 고구려에 대응했다.", answer: true, explanation: "고구려 장수왕의 위협적인 남하 정책에 맞서기 위해, 이전까지 적대적이었던 신라와 백제가 손을 잡은 외교 사건입니다." },
  { id: 331, category: "prehistoric", categoryLabel: "선사·고대", text: "신라 소지 마립간은 백제 동성왕과 혼인 동맹을 맺어 나·제 동맹을 더욱 공고히 하였다.", answer: true, explanation: "눌지왕 때 결성된 나·제 동맹을 강화하기 위해 왕실 간의 정략결혼을 성사시켜 대고구려 전선을 공고히 했습니다." },
  { id: 332, category: "prehistoric", categoryLabel: "선사·고대", text: "신라 지증왕은 이사부를 파견하여 우산국(울릉도)을 복속시키고 영토로 편입했다.", answer: true, explanation: "512년 지증왕 대에 이사부 장군이 우산국을 정벌함으로써 울릉도와 독도가 한국사의 영토 지배권에 편입되었습니다." },
  { id: 333, category: "prehistoric", categoryLabel: "선사·고대", text: "신라 법흥왕은 상대등 제도를 신설하여 귀족 세력을 통제하고 병부를 설치하여 군권을 장악했다.", answer: true, explanation: "법흥왕은 군사 기구인 병부와 귀족의 대표 격인 상대등을 두어 왕권과 귀족 세력의 균형 및 중앙 집권을 꾀했습니다." },
  { id: 334, category: "prehistoric", categoryLabel: "선사·고대", text: "신라 진흥왕은 백제 성왕과 연합하여 한강 유역을 되찾은 뒤, 백제를 배신하고 한강 전역을 독점했다.", answer: true, explanation: "진흥왕은 한강 하류를 독차지하여 신라가 당나라와 직접 교류할 수 있는 서해안 교두보(당항성)를 마련했습니다." },
  { id: 335, category: "prehistoric", categoryLabel: "선사·고대", text: "진흥왕의 배신에 분노한 백제 성왕은 신라를 공격하였으나 관산성 전투에서 전사하였다.", answer: true, explanation: "554년 관산성 전투에서 성왕이 전사하면서 백제와 신라의 나·제 동맹은 완전히 깨지고 원수 관계로 돌아섰습니다." },
  { id: 336, category: "prehistoric", categoryLabel: "선사·고대", text: "신라 진흥왕은 영토 확장 사실을 기념하기 위해 창녕비, 북한산비 등 4개의 순수비를 세웠다.", answer: true, explanation: "진흥왕 순수비(북한산, 창녕, 황초령, 마운령비)는 신라의 전성기 영토 영역을 보여주는 실물 유적입니다." },
  { id: 337, category: "prehistoric", categoryLabel: "선사·고대", text: "고령의 대가야는 진흥왕 시기에 신라의 공격을 받아 최종적으로 병합되면서 가야 연맹이 소멸했다.", answer: true, explanation: "562년 이사부와 사다함이 이끄는 신라군에 의해 대가야가 멸망하면서 가야의 역사는 종지부를 찍었습니다." },
  { id: 338, category: "prehistoric", categoryLabel: "선사·고대", text: "고구려 영양왕 대에 수나라 양제가 30만 대군을 이끌고 쳐들어오자 을지문덕이 살수에서 격퇴했다.", answer: false, explanation: "살수대첩(612년) 때 수나라 양제가 직접 끌고 온 전체 대군은 113만 명이며, 을지문덕이 격퇴한 것은 우중문의 별동대 30만 5천 명입니다." },
  { id: 340, category: "prehistoric", categoryLabel: "선사·고대", text: "고구려는 수나라의 침략을 막아낸 뒤, 당나라의 침입에 대비하여 천리장성을 축조하기 시작했다.", answer: true, explanation: "부여성에서 비사성에 이르는 고구려의 천리장성 축조가 시작되었으며 이를 감독하며 권력을 키운 인물이 연개소문입니다." },
  { id: 341, category: "prehistoric", categoryLabel: "선사·고대", text: "연개소문은 정변을 일으켜 영류왕을 시해하고 보장왕을 옹립한 뒤, 스스로 최고 관직인 '대막리지'에 올랐다.", answer: true, explanation: "연개소문은 권력을 독점한 후 당나라에 대해 강경책을 펼쳤고, 이는 당 태종이 고구려를 침공하는 빌미가 되었습니다." },
  { id: 342, category: "prehistoric", categoryLabel: "선사·고대", text: "백제 의자왕은 재위 초기에 전제 왕권을 확립하고 신라의 대야성 등 40여 개 성을 함락하는 성과를 거두었다.", answer: true, explanation: "의자왕은 초기에는 신라의 국경 압박 체제를 공고히 하여 성들을 빼앗고 김춘추의 딸과 사위를 죽였습니다." },
  { id: 343, category: "prehistoric", categoryLabel: "선사·고대", text: "대야성 함락으로 위기를 느낀 김춘추는 고구려의 연개소문을 찾아가 구원 요청을 했으나 거절당했다.", answer: true, explanation: "연개소문은 신라가 차지한 한강 유역(죽령 이북의 땅)을 돌려달라는 무리한 요구를 제시하여 협상이 결렬되었습니다." },
  { id: 344, category: "prehistoric", categoryLabel: "선사·고대", text: "나·당 동맹을 체결한 연합군은 660년 황산벌 전투에서 계백의 결사대를 격파하고 백제를 멸망시켰다.", answer: true, explanation: "소정방의 당군과 김유신의 신라군이 연합하여 백제의 최후 보루인 사비성을 장악하고 의자왕의 항복을 받았습니다." },
  { id: 345, category: "prehistoric", categoryLabel: "선사·고대", text: "백제 멸망 후 웅진도독부가 설치되자 복신과 도침은 주류성에서 백제 부흥 운동을 전개했다.", answer: true, explanation: "부흥군 세력은 왜에 가 있던 왕자 풍을 왕으로 추대하고 임존성의 흑치상지와 함께 당나라군에 거세게 저항했습니다." },
  { id: 346, category: "prehistoric", categoryLabel: "선사·고대", text: "백제 부흥군을 돕기 위해 왜의 수군이 파견되었으나 백강 전투에서 나·당 연합군에게 전멸당했다.", answer: true, explanation: "663년 금강 하구에서 벌어진 백강 전투의 대패로 백제 부흥 운동은 최종적으로 좌절되었습니다." },
  { id: 347, category: "prehistoric", categoryLabel: "선사·고대", text: "나·당 연합군은 지배층의 내분에 휩싸인 고구려를 공격하여 668년 평양성을 함락하고 고구려를 멸망시켰다.", answer: true, explanation: "연개소문 사후 아들들(남생, 남건 등)의 권력 다툼과 분열로 인해 고구려는 허무하게 무너졌습니다." },
  { id: 348, category: "prehistoric", categoryLabel: "선사·고대", text: "고구려 멸망 후 검모잠은 안승을 왕으로 추대하고 한성(재령)을 근거지로 부흥 운동을 폈다.", answer: true, explanation: "검모잠은 요동의 고연무 세력과 연대하여 저항했으나, 이후 내부 갈등으로 안승이 검모잠을 살해하면서 분열되었습니다." },
  { id: 349, category: "prehistoric", categoryLabel: "선사·고대", text: "당나라가 계림도독부, 웅진도독부 등을 설치하며 한반도 전체를 삼키려 하자 신라는 당나라와 전쟁을 벌였다.", answer: true, explanation: "당나라가 지배 야욕을 노골화하자, 신라는 옛 고구려 및 백제 유민 세력을 포섭하여 나·당 전쟁에 돌입했습니다." },
  { id: 350, category: "prehistoric", categoryLabel: "선사·고대", text: "신라 문무왕은 고구려 유민 안승을 금마저(익산)에 '보덕국왕'으로 임명하여 당나라 대항에 활용했다.", answer: true, explanation: "당나라를 축출하기 위해 고구려 부흥군을 신라 영토 내의 완충 지대에 수용하고 지원한 외교적 전술입니다." },
  { id: 351, category: "prehistoric", categoryLabel: "선사·고대", text: "신라는 매소성 전투에서 당의 육군을, 기벌포 해전에서 당의 수군을 격파하며 삼국 통일을 완성했다.", answer: true, explanation: "675년 매소성과 676년 기벌포의 대승으로 당나라 세력을 대동강 이남 밖으로 완전히 축출해 냈습니다." }
];
