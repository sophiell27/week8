module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    fontSize: {
      'text-sm': ['14px', {
        lineHeight: '20px',
      }],
      'base-sm': ['16px', {
        lineHeight: '16px',
      }],
      'base': ['16px', {
        lineHeight: '24px',
      }],
      '4.5-sm': ['18px', {
        lineHeight: '18px',
      }],
      "4.5": ['18px', {
        lineHeight: '26px',
      }],
      "xl": ['20px', {
        lineHeight: '26px',
      }],
      "2xl-sm": ['24px', {
        lineHeight: '24px',
      }],
      "2xl": ['24px', {
        lineHeight: '35px',
      }],
      "3.5xl-sm": ['32px', {
        lineHeight: '32px',
      }],
      "3.5xl": ['32px', {
        lineHeight: '46px',
      }],
      "5xl-sm": ['48px', {
        lineHeight: '48px',
      }],
      "5xl": ['48px', {
        lineHeight: '70px',
      }],
      "7.5xl": ['80px', {
        lineHeight: '85px',
      }],
    },
    extend: {
      container: {
        center: true,
        padding: "12px",
      },
      colors:{
        "primary": "#E6553B",
        "secondary": "#53C139",
        "grey":{
          "light": "#F0F0F0",
          DAFAULT:  "#808080",
        }
      },
      spacing: {
        '4.5': '18px',
        '22': "88px",
        '22.5': '90px',
      },
      fontFamily: {
        "patone": "Paytone One",
      },
      aspectRatio: {
        '103': '103 / 100',
      },
      borderStyle: ['responsive', 'hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}