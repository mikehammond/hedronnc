export const application = {
  id: 1593161544240,
  title: 'Oxford University - Undergraduate',
  description: 'Very New Application Description',
  bg: require('~/assets/application-bg.png'),
  student: {
    name: 'Michael Hammond',
    email: 'michael.hammond@meltwater.org',
    phone: '+233248470214',
    avatar: require('~/assets/student-avatar.jpg')
  },
  startDate: new Date(),
  endDate: new Date()
}

export const step = {
  id: 1593161765499,
  applicationId: 1593161544240,
  title: 'Work on Application',
  bg: require('~/assets/application-bg.png')
}

export const task = {
  id: 1593161796022,
  applicationId: 1593161544240,
  stepId: 1593161765499,
  title: 'Upload Transcripts',
  checked: false
}
