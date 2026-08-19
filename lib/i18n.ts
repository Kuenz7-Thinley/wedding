export type Locale = "en" | "ja";

export type PageId = "home" | "details" | "travel" | "schedule" | "rsvp";

export type TranslationKey = keyof typeof translations.en;

const translations = {
  en: {
    "meta.home.title": "Kuenzang & Miyu | Save the Date",
    "meta.home.description":
      "Save the Date — Monday, July 12, 2027. Join us for our wedding celebration at Happo-en, Tokyo.",
    "meta.details.title": "Details | Kuenzang & Miyu",
    "meta.details.description": "Wedding details — location, date, attire, and more.",
    "meta.travel.title": "Travel & Stay | Kuenzang & Miyu",
    "meta.travel.description": "Travel and lodging information for our Tokyo wedding.",
    "meta.schedule.title": "Schedule | Kuenzang & Miyu",
    "meta.schedule.description": "Wedding day schedule and timeline.",
    "meta.rsvp.title": "RSVP | Kuenzang & Miyu",
    "meta.rsvp.description": "RSVP for our wedding celebration.",

    "nav.home": "Home",
    "nav.details": "Details",
    "nav.travel": "Travel & Stay",
    "nav.rsvp": "RSVP",
    "nav.schedule": "Schedule",

    "common.menu": "Menu",
    "common.homeLabel": "Home",
    "common.langLabel": "Language",

    "footer.tagline": "With love, we can't wait to celebrate with you",

    "images.couple": "Kuenzang and Miyu",
    "images.hero": "Kuenzang and Miyu",
    "images.venue": "Happo-en, Tokyo",
    "images.travel": "Tokyo travel",
    "images.garden": "Happo-en garden",
    "images.hotel1": "Shinagawa Prince Hotel",
    "images.hotel2": "The Prince Park Tower Tokyo",

    "home.date": "Monday, July 12, 2027",
    "home.venue": "Happo-en · Tokyo, Japan",
    "home.eyebrow": "Save the Date",
    "home.rsvpCta": "RSVP Now",
    "home.explore": "Explore",
    "home.exploreSubtitle": "Everything you need to know about our special day",
    "home.card.schedule": "Schedule",
    "home.card.rsvp": "RSVP",
    "home.card.details": "Details",
    "home.card.travel": "Travel & Stay",
    "home.countdown.title": "Counting Down",
    "home.countdown.subtitle": 'Until we say "I do"',
    "home.countdown.aria": "Countdown to wedding",

    "countdown.days": "Days",
    "countdown.hours": "Hours",
    "countdown.minutes": "Minutes",
    "countdown.seconds": "Seconds",

    "details.title": "Details",
    "details.subtitle": "Everything you need to know",
    "details.location.title": "Location",
    "details.location.body":
      "The ceremony, cocktail hour, and reception will be held at <strong>Happo-en</strong>, 1-1-1 Shirokanedai, Minato City, Tokyo 108-8631, Japan.",
    "details.location.maps": "View on Google Maps",
    "details.location.website": "Visit venue website",
    "details.dateTime.title": "Date & Time",
    "details.dateTime.lead": "Monday, July 12, 2027.",
    "details.dateTime.arrival":
      "Please arrive at 2:00 PM. The ceremony will begin promptly at 2:30 PM.",
    "details.dateTime.travelLink": "Travel & Stay",
    "details.dateTime.scheduleLink": "here",
    "details.dateTime.linksPrefix": "See the",
    "details.dateTime.linksMiddle": "page for lodging suggestions. Click",
    "details.dateTime.linksSuffix": "to view the full schedule.",
    "details.attire.title": "Attire",
    "details.attire.body":
      "We are so excited to see you all dressed up! Please wear formal attire. The ceremony and cocktail hour will be held in Happo-en's renowned Japanese garden, with an indoor reception to follow. Summer weather in Tokyo can be warm and humid — we suggest lightweight fabrics and comfortable shoes for walking on garden paths.",
    "details.parking.title": "Parking",
    "details.parking.body":
      "Parking is available at Happo-en. We recommend arriving a little early to enjoy the garden before the ceremony.",

    "travel.title": "Travel & Stay",
    "travel.subtitle": "Plan your visit",
    "travel.gettingThere.title": "Getting There",
    "travel.gettingThere.body":
      "We can't wait to celebrate with you at Happo-en, a treasured Tokyo landmark surrounded by centuries-old gardens. The nearest stations are Shirokanedai (Namboku Line / Mita Line) and Shinagawa.",
    "travel.gettingThere.directions": "Get Directions",
    "travel.stay.title": "Where to Stay",
    "travel.stay.body":
      "Tokyo offers excellent transit options. We recommend booking accommodations early — July is a popular travel season.",
    "travel.hotel1.name": "Shinagawa Prince Hotel",
    "travel.hotel1.desc": "A convenient option with easy access to Happo-en via taxi or train.",
    "travel.hotel2.name": "The Prince Park Tower Tokyo",
    "travel.hotel2.desc": "Upscale stay near Shinagawa Station, ideal for visiting guests.",
    "travel.learnMore": "Learn more",
    "travel.notes.title": "Important Notes",
    "travel.notes.body":
      "Please allow extra travel time on the day of the ceremony. If you are arriving from abroad, consider staying near Shinagawa or Minato for the easiest access to the venue.",

    "schedule.title": "Schedule",
    "schedule.subtitle": "Timeline for the day",
    "schedule.item1.time": "2:00 PM",
    "schedule.item1.title": "Guest Arrival",
    "schedule.item1.desc": "Welcome drinks in the garden",
    "schedule.item2.time": "2:30 PM",
    "schedule.item2.title": "Ceremony",
    "schedule.item2.desc": "Garden ceremony at Happo-en",
    "schedule.item3.time": "3:30 PM",
    "schedule.item3.title": "Cocktail Hour",
    "schedule.item3.desc": "Appetizers and refreshments",
    "schedule.item4.time": "5:00 PM",
    "schedule.item4.title": "Reception Dinner",
    "schedule.item4.desc": "Dinner, toasts, and celebration",
    "schedule.item5.time": "7:00 PM",
    "schedule.item5.title": "After Party",
    "schedule.item5.desc": "Dinner till midnight",

    "rsvp.title": "RSVP",
    "rsvp.subtitle": "We hope you can join us",
    "rsvp.name": "Full Name",
    "rsvp.email": "Email",
    "rsvp.attending": "Will you be attending?",
    "rsvp.accept": "Joyfully accepts",
    "rsvp.decline": "Regretfully declines",
    "rsvp.guests": "Number of Guests (including yourself)",
    "rsvp.dietary": "Dietary Restrictions",
    "rsvp.message": "Message to the Couple",
    "rsvp.optional": "Optional",
    "rsvp.submit": "Submit RSVP",
    "rsvp.submitting": "Sending…",
    "rsvp.error": "Something went wrong. Please try again.",
    "rsvp.validation.nameRequired": "Please enter your full name.",
    "rsvp.validation.nameMin": "Name must be at least 2 characters.",
    "rsvp.validation.nameMax": "Name must be 100 characters or fewer.",
    "rsvp.validation.emailRequired": "Please enter your email address.",
    "rsvp.validation.emailInvalid": "Please enter a valid email address.",
    "rsvp.validation.attendingRequired": "Please select whether you will attend.",
    "rsvp.validation.guestsInvalid": "Please select a valid number of guests.",
    "rsvp.validation.dietaryMax": "Dietary restrictions must be 500 characters or fewer.",
    "rsvp.validation.messageMax": "Message must be 1,000 characters or fewer.",
    "rsvp.thankYou": "Thank You!",
    "rsvp.confirmation":
      "Your response has been received. We can't wait to celebrate with you on Monday, July 12, 2027.",
  },
  ja: {
    "meta.home.title": "クンザン & みゆ | セーブ・ザ・デート",
    "meta.home.description": "2027年7月12日（月）— 東京・八芳園での結婚式にお越しください。",
    "meta.details.title": "詳細 | クンザン & みゆ",
    "meta.details.description": "結婚式の詳細 — 会場、日時、ドレスコードなど。",
    "meta.travel.title": "アクセス・宿泊 | クンザン & みゆ",
    "meta.travel.description": "東京での結婚式のアクセスと宿泊情報。",
    "meta.schedule.title": "スケジュール | クンザン & みゆ",
    "meta.schedule.description": "当日のスケジュールとタイムライン。",
    "meta.rsvp.title": "出欠確認 | クンザン & みゆ",
    "meta.rsvp.description": "結婚式の出欠確認。",

    "nav.home": "ホーム",
    "nav.details": "詳細",
    "nav.travel": "アクセス・宿泊",
    "nav.rsvp": "出欠確認",
    "nav.schedule": "スケジュール",

    "common.menu": "メニュー",
    "common.homeLabel": "ホーム",
    "common.langLabel": "言語",

    "footer.tagline": "皆さまとお祝いできる日を心より楽しみにしています",

    "images.couple": "クンザンとみゆ",
    "images.hero": "クンザンとみゆ",
    "images.venue": "八芳園、東京",
    "images.travel": "東京・旅行",
    "images.garden": "八芳園の庭園",
    "images.hotel1": "品川プリンスホテル",
    "images.hotel2": "ザ・プリンス パークタワー東京",

    "home.date": "2027年7月12日（月）",
    "home.venue": "八芳園 · 東京、日本",
    "home.eyebrow": "Save the Date",
    "home.rsvpCta": "出欠を返信する",
    "home.explore": "ご案内",
    "home.exploreSubtitle": "当日について知っておいていただきたいこと",
    "home.card.schedule": "スケジュール",
    "home.card.rsvp": "出欠確認",
    "home.card.details": "詳細",
    "home.card.travel": "アクセス・宿泊",
    "home.countdown.title": "カウントダウン",
    "home.countdown.subtitle": "「はい」の瞬間まで",
    "home.countdown.aria": "結婚式までのカウントダウン",

    "countdown.days": "日",
    "countdown.hours": "時間",
    "countdown.minutes": "分",
    "countdown.seconds": "秒",

    "details.title": "詳細",
    "details.subtitle": "当日について",
    "details.location.title": "会場",
    "details.location.body":
      "挙式、カクテル、レセプションは <strong>八芳園</strong>（〒108-8631 東京都港区白金台1-1-1）にて行います。",
    "details.location.maps": "Google マップで見る",
    "details.location.website": "会場公式サイト",
    "details.dateTime.title": "日時",
    "details.dateTime.lead": "2027年7月12日（月）",
    "details.dateTime.arrival": "開始 14:00 までにお越しください。挙式は 14:30 より開始いたします。",
    "details.dateTime.travelLink": "アクセス・宿泊",
    "details.dateTime.scheduleLink": "スケジュール",
    "details.dateTime.linksPrefix": "宿泊については",
    "details.dateTime.linksMiddle": "をご覧ください。",
    "details.dateTime.linksSuffix": "もご確認ください。",
    "details.attire.title": "ドレスコード",
    "details.attire.body":
      "フォーマルな装いでお越しください。挙式とカクテルは八芳園の日本庭園で、披露宴は室内で行います。7月の東京は暑く蒸し暑いことがありますので、軽やかな服装と歩きやすい靴をおすすめします。",
    "details.parking.title": "駐車場",
    "details.parking.body":
      "八芳園に駐車場がございます。挙式前に庭園をお楽しみいただけるよう、少し早めのご到着をおすすめします。",

    "travel.title": "アクセス・宿泊",
    "travel.subtitle": "お越しのご案内",
    "travel.gettingThere.title": "アクセス",
    "travel.gettingThere.body":
      "400年の歴史を誇る庭園に囲まれた八芳園で、皆さまとお祝いできることを心より楽しみにしています。最寄り駅は白金台駅（南北線・三田線）および品川駅です。",
    "travel.gettingThere.directions": "ルートを見る",
    "travel.stay.title": "宿泊",
    "travel.stay.body": "東京は交通機関が充実しています。7月は旅行シーズンのため、早めの宿泊予約をおすすめします。",
    "travel.hotel1.name": "品川プリンスホテル",
    "travel.hotel1.desc": "品川からアクセスしやすく、八芳園へも便利な宿泊施設です。",
    "travel.hotel2.name": "ザ・プリンス パークタワー東京",
    "travel.hotel2.desc": "品川エリアの高級ホテル。ご列席の方の宿泊に適しています。",
    "travel.learnMore": "詳しく見る",
    "travel.notes.title": "ご注意",
    "travel.notes.body":
      "当日は余裕を持ってお越しください。海外からお越しの方は、品川または港区エリアへの宿泊が会場へのアクセスに便利です。",

    "schedule.title": "スケジュール",
    "schedule.subtitle": "当日の流れ",
    "schedule.item1.time": "14:00",
    "schedule.item1.title": "受付",
    "schedule.item1.desc": "庭園でのウェルカムドリンク",
    "schedule.item2.time": "14:30",
    "schedule.item2.title": "挙式",
    "schedule.item2.desc": "八芳園庭園での挙式",
    "schedule.item3.time": "15:30",
    "schedule.item3.title": "カクテル",
    "schedule.item3.desc": "歓談と軽食",
    "schedule.item4.time": "17:00",
    "schedule.item4.title": "披露宴",
    "schedule.item4.desc": "お食事、乾杯、お祝い",
    "schedule.item5.time": "19:00",
    "schedule.item5.title": "二次会",
    "schedule.item5.desc": "二次会・ディナー",

    "rsvp.title": "出欠確認",
    "rsvp.subtitle": "ご出席をお待ちしております",
    "rsvp.name": "お名前",
    "rsvp.email": "メールアドレス",
    "rsvp.attending": "ご出席されますか？",
    "rsvp.accept": "出席します",
    "rsvp.decline": "欠席します",
    "rsvp.guests": "人数（ご本人含む）",
    "rsvp.dietary": "アレルギー・食事制限",
    "rsvp.message": "新郎新婦へのメッセージ",
    "rsvp.optional": "任意",
    "rsvp.submit": "送信する",
    "rsvp.submitting": "送信中…",
    "rsvp.error": "送信に失敗しました。もう一度お試しください。",
    "rsvp.validation.nameRequired": "お名前を入力してください。",
    "rsvp.validation.nameMin": "お名前は2文字以上で入力してください。",
    "rsvp.validation.nameMax": "お名前は100文字以内で入力してください。",
    "rsvp.validation.emailRequired": "メールアドレスを入力してください。",
    "rsvp.validation.emailInvalid": "有効なメールアドレスを入力してください。",
    "rsvp.validation.attendingRequired": "出席・欠席を選択してください。",
    "rsvp.validation.guestsInvalid": "人数を選択してください。",
    "rsvp.validation.dietaryMax": "アレルギー・食事制限は500文字以内で入力してください。",
    "rsvp.validation.messageMax": "メッセージは1,000文字以内で入力してください。",
    "rsvp.thankYou": "ありがとうございます",
    "rsvp.confirmation": "ご返信を確認いたしました。2027年7月12日（月）お会いできることを楽しみにしています。",
  },
} as const;

export function translate(locale: Locale, key: TranslationKey): string {
  return translations[locale][key] ?? translations.en[key] ?? key;
}

export function getPageMeta(locale: Locale, page: PageId) {
  return {
    title: translate(locale, `meta.${page}.title`),
    description: translate(locale, `meta.${page}.description`),
  };
}

export const STORAGE_KEY = "wedding-locale";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "ja";
}
