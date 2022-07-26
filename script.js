const OPTIONS = {
   method: 'GET',
   headers: {
     'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
     'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
   }
}

const fetchIpInfo = ip => {
   return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, OPTIONS)
   .then(res => res.json())
   .catch(err => console.error(err))
}

const d = selector => document.querySelector(selector)
const $form = d('#form')
const $input = d('#input')
const $submit = d('#submit')
const $results = d('#results')

$form.addEventListener('submit', async (e) => {
   e.preventDefault()
   const {value} = $input
   if (!value) return

   $submit.setAttribute('disable', ' ')
   $submit.setAttribute('aria-busy', 'true')

   const ipInfo = await fetchIpInfo(value)

   if (ipInfo) {
      $results.innerHTML = JSON.stringify(ipInfo, null, 2)
   }

   $submit.removeAttribute('disable')
   $submit.removeAttribute('aria-busy')
})