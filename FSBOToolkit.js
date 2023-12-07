let CONFIG = null
const VERSION = "Goldcrest"
const TITLE = "FSBO toolkit"

const SLACK =
  "https://kugawana.slack.com/archives/C04538Q5PN0/p1698954491669619?thread_ts=1698926655.268359&cid=C04538Q5PN0"

const FORM_DATA = {
  apartment: {
    contact: {
      userName: "test_dev",
    },
    propertyType: "apartment",
    features: {
      surface: 70,
      rooms: 3,
      bathroomsNb: 1,
      hasBalcony: true,
      floorNumber: 2,
      totalFloors: 2,
      hasBox: true,
      constructionYear: 1950,
      bedrooms: 2,
      balconySurface: 4,
    },
    address: {
      id: "STRTFR44134",
      displayName: "Parc du Plessis Picard, 77550 Réau",
      postalCode: "77550",
      city: "Réau",
      street: "Parc du Plessis Picard",
      coordinates: {
        lat: 48.597220325187074,
        lng: 2.5953250915326933,
      },
    },
    energy: {
      hasDPEResults: "exception",
    },
    photos: [
      {
        url: "https://v.seloger.com/s/cdn/x/visuels/1/w/x/0/1wx0r1j725yutyqbi1e1rchblkqvvy2edqrf52w8f.jpg",
        uniqId: "16985812616061",
      },
    ],
    description: "Ceci est la description d'un appartement",
    price: 200000,
  },
  house: {
    contact: {
      userName: "test_dev",
    },
    propertyType: "house",
    features: {
      surface: 200,
      rooms: 6,
      bathroomsNb: 2,
      showerRoomsNb: 1,
      hasTerrace: true,
      hasBalcony: false,
      hasGarden: true,
      hasSwimmingPool: true,
      hasParking: true,
      hasCellar: true,
      constructionYear: 2000,
      landSurface: 300,
      balconySurface: 4,
      bedrooms: 3,
      terracesNb: 9,
    },
    address: {
      id: "STRTFR1176379",
      displayName: "Marina Di Fiori, 20137 Porto-Vecchio",
      postalCode: "20137",
      city: "Porto-Vecchio",
      street: "Marina Di Fiori",
      coordinates: {
        lat: 41.61320941350111,
        lng: 9.289385719190399,
      },
    },
    energy: {
      hasDPEResults: "exception",
    },
    photos: [
      {
        url: "https://v.seloger.com/s/cdn/x/visuels/1/5/c/v/15cvidx1wfok89ifutcflge97whgi49lphybpf92n.jpg",
        uniqId: "16985833248085",
      },
    ],
    description: "Ceci est la description d'une maison",
    price: 400000,
  },
  parking: {
    contact: {
      userName: "test_dev",
    },
    propertyType: "parking",
    features: {
      surface: 8,
      parkingSize: 1,
    },
    address: {
      id: "STRTFR3590121",
      displayName: "Le Breuil d'Haleine, 86400 Saint-Macoux",
      postalCode: "86400",
      city: "Saint-Macoux",
      street: "Le Breuil d'Haleine",
      coordinates: {
        lat: 46.12708825507958,
        lng: 0.2521182456952658,
      },
    },
    energy: {
      hasDPEResults: "exception",
    },
    photos: [
      {
        url: "https://v.seloger.com/s/cdn/x/visuels/1/b/1/m/1b1mzwwjta7koy9qt295w7dywq09lscbo2o835ltb.jpg",
        uniqId: "16985834503999",
      },
    ],
    description: "Ceci est la description d'un parking",
    price: 20000,
  },
  stepperData: [
    {
      id: "propertyType",
      title: "Type de bien",
      path: "/property-type",
      status: "complete",
      current: false,
    },
    {
      id: "address",
      title: "Adresse",
      path: "/address",
      status: "complete",
      current: false,
    },
    {
      id: "features",
      title: "Caractéristiques",
      path: "/features",
      status: "complete",
      current: false,
    },
    {
      id: "energy",
      title: "Bilan énergétique",
      path: "/energy",
      status: "complete",
      current: false,
    },
    {
      id: "photos",
      title: "Photos",
      path: "/photos",
      status: "complete",
      current: false,
    },
    {
      id: "description",
      title: "Description",
      path: "/description",
      status: "complete",
      current: false,
    },
    {
      id: "price",
      title: "Prix de vente",
      path: "/price",
      status: "complete",
      current: false,
    },
    {
      id: "contact",
      title: "Contact",
      path: "/contact",
      status: "complete",
      current: true,
    },
  ],
  listingLimitation: { canCreateClassified: true },
}

const styles = () =>
  `
      .m_listing_id {
        position: absolute;
        bottom: 5px;
        left: 5px;
        padding: 2px 5px;
        border: solid 1px #000000;
        background: #fff8e3;
        borderRadius: 2px;
        cursor: pointer;
      }

      .m_container {
        position:fixed;
        top:2px;
        left:2px;
        border:dashed 2px #000000;
        background: #fff8e3;
        z-index:1000000;
        cursor: default;
        opacity: 0.2;
      }

      .m_container a {
        text-decoration: none;
      }

      .m_container a:hover {
        text-decoration: underline;
      }

      .m_container .m_version {
        top: 5px;
        right: 5px;
        opacity: 0.2;
        position: absolute;
      }

      .m_container hr {
        margin-top: 0;
      }
  
      .m_container:hover {
        opacity: 1;
        box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
      }
  
      .m_container:hover ul {
        display: block;
      }

      .m_container .m_log {
        display: none;
        padding: 5px;
      }

      .m_container:hover .m_rq {
        display: block;
      }
  
      .m_container .m_rq {
        display: none;
        position: absolute;
        top: 10px;
        left: 10px;
        width: 200px;
        background-color: white;
        border: solid 1px #000000;
        font-size: 12px;
        line-height: 14px;
        padding: 2px;
        margin: 0;
      }

      .m_container .m_rq a {
        font-weight: bold;
      }

      .m_container:hover .m_log {
        display: block;
      }
  
      .m_container .m_logo {
        display: block;
        margin: 0;
        padding: 4px;
      }
  
      .m_container:hover .m_logo {
        display: none;
      }
  
      .m_container .m_title {
        display: none;
        margin: 0;
        padding: 10px;
      }
  
      .m_container:hover .m_title { 
        margin: 10px;
        padding: 0;
        display: block;
        cursor: pointer;
        text-align: center;
      }

      .m_container:hover .m_title .m_anim {
        background-color: #515180;
        color: white;
        padding: 10px;
        border-radius: 4px;
        display: inline-block;
      }

      .m_container .m_info {
        display: none;
        flex-direction: column;
        gap: 4px;
        width: 100%;
      }
  
      .m_container:hover .m_info {
        display: flex;
      }
  
      .m_container .m_info p {
        margin: 0;
        padding: 0 10px;
        line-height: 24px;
        display: flex;;
      }
  
      .m_container .m_info p>button,
      .m_container .m_info p>input,
      .m_container .m_info p>select {
        margin-left: 4px;
        width: 75px;
        text-align: center;
      }

      .m_container .m_info p>button.m_small {
        width: 22px;
        font-size: 11px;
      }
  
      .m_container .m_info p>button:nth-child(2),
      .m_container .m_info p>input:nth-child(2) {
        margin-left: auto;
      }
  
      .m_container ul {
        display: none;
        margin-left: 15px;
        padding:10px;
        margin:0;
      }
  
      .m_container li {
        cursor: pointer;
        display: flex;
        margin: 4px 0;
        line-height: 24px;
        gap: 4px;
      }
  
      .m_container li:last-child::before {
        color: transparent;
      }
  
      .m_container li.m_connected::before {
        color: green;
      }
  
      .m_container li::before {
        content: "•";
        color: red;
        display: inline-block;
        font-size: 24px;
        margin-right: 5px;
      }
  
      .m_container li span {
        margin-right: 5px;
      }
  
      .m_container button {
        margin-left: auto;
        width: 75px;
        border: solid 1px #000000;
        background: lightgrey;
        border-radius: 2px;
        cursor: pointer;
        padding: 2px;
        font-size: 14px;
        color: black;
        min-width: inherit;
        transition: all 0.3s ease-out;
      }
  
      .m_container button:hover {
        background: #afafaf;
      }
  
      .m_container input, .m_container select {
        border: solid 1px #000000;
        border-radius: 2px;
        background-color: white;
        padding: 2px;
      }
  
      .m_container li .m_email {
        width: 200px;
      }
  
      .m_container li .m_password {
        width: 90px;
      }
  
      .m_container li .m_is_prod {
        width: 60px;
      }
  
      .m_container hr {
        border: solid 1px black;
      }
  
  
    `

const UI = {
  formAddUser: () => `
    <li>
      <input placeholder="email" name="email" id="m_email" class="m_email">
      <input placeholder="password" name="password" id="m_password" class="m_password">
      <select name="isProd" id="m_is_prod" class="m_is_prod">
        <option ${getHost() !== "prod" ? `selected="selected"` : ""} value="rct">rct</option>
        <option ${getHost() === "prod" ? `selected="selected"` : ""} value="prod">prod</option>
      </select>

      <button class="m_add">add</button>
    </li>
  `,
  header: async () => {
    const config = (await GM.getValue("config", 0)) || {}

    return `
    <h3 class="m_logo">
        FSBO
    </h3>
    
    <h3 class="m_title">
        <div class="m_anim">${TITLE}</div>
    </h3>
    
    ${
      config.version !== VERSION
        ? `<p class="m_rq">
          For optimal use please update the 
          <a href="${SLACK}" target="_blank">
            config
          </a>
        </p>`
        : ""
    }`
  },
  footer: () => `
    <div class="m_log"></div>
  `,
  infos: (fsboDebug) => {
    const config = CONFIG ? JSON.stringify(CONFIG).replace(/\n\t /gi, "") : ""

    return `
    <div class="m_info">
      <div class="m_version">[<a href="https://en.wikipedia.org/wiki/${VERSION}" target="_blank">${VERSION}</a>]</div>
      <p>
        <span>Config</span>
        <input value='${config}' id="m_config"/>
        <button class="m_update_config">update</button>
      </p>
      <p>
      <span>Listings id</span>
      <button class="m_add_listing_id">add</button>
    </p>
      <p>
        <span style="color:${fsboDebug ? "green" : "red"};">
          fsbo-debug
        </span>
        <button class="m_debug">${fsboDebug ? "true" : "false"}</button>
      </p>
      <p>
        <span>SessionStorage</span>
        <button class="m_clear">clear</button>
      </p>
      <p>
        <span>Auto fill FSBO Form</span>
        <button class="m_auto_form" data-id="apartment">apartment</button>
        <button class="m_auto_form" data-id="house">house</button>
        <button class="m_auto_form" data-id="parking">parking</button>
      </p>
      <p>
        <span>FSBO</span>
        <button class="m_links" data-id="formFSBO">add</button>
        <button class="m_links" data-id="list">manage</button>
        <button class="m_links" data-id="editFSBO">edit</button>
      </p>
      <p>
        <span>FRBO</span>
        <button class="m_links" data-id="formFRBO">add</button>
        <button class="m_links" data-id="list">manage</button>
        <button class="m_links" data-id="editFRBO">edit</button>
      </p>
      <p>
        <span>Server</span>
        <button class="m_server m_small" data-id="-landlord-rct-1.dignp">S1</button>
        <button class="m_server m_small" data-id="-landlord-rct-2.dignp">S2</button>
        <button class="m_server m_small" data-id="-landlord-rct-3.dignp">S3</button>
        <button class="m_server m_small" data-id="-landlord-rct-4.dignp">S4</button>
        <button class="m_server m_small" data-id="-landlord-rct-5.dignp">S5</button>
        
        <button class="m_server m_small" data-id="-lci-rct-1.dignp">O1</button>
        <button class="m_server m_small" data-id="-lci-rct-2.dignp">O2</button>
        <button class="m_server m_small" data-id="-lci-rct-3.dignp">O3</button>
        <button class="m_server m_small" data-id="-lci-rct-4.dignp">O4</button>
        <button class="m_server m_small" data-id="-lci-rct-5.dignp">O5</button>
        <button class="m_server" data-id="-preprod-1.dignp">preprod</button>
        <button class="m_server" data-id="">prod</button>
      </p>
    </div>`
  },
  listUser: (accounts, UIFormAddUser) => {
    let oneConnected = false
    return `
    <ul>
      <hr/>
      ${
        accounts
          .sort((a, b) => (a.connected ? 0 : 1) - (b.connected ? 0 : 1))
          .filter((account) => account.isProd === (getHost() === "prod"))
          .map(({ email, password, connected, userId, isProd }) => {
            if (connected) oneConnected = true

            return `<li data-id="${userId}" class="${connected ? "m_connected" : "m_disconnected"}">
              <input  type="email" value="${email}" class="m_email" readonly/>
              <input value="${password}" class="m_password" readonly/>
              <input value="${isProd ? "prod" : "rct"}" class="m_is_prod" readonly/>
              <button class="m_copy">copy</button>
              <button 
                style="visibility:${oneConnected && !connected ? "hidden" : "visibsle"}"
                class="m_connexion"
              >
                ${connected ? "logout" : "login"}
              </button>
              <button class="m_delete">delete</button>
            </li>`
          })
          .join("") + UIFormAddUser
      }
    </ul>
    `
  },
}

const request = ({ url, method, data, apiKey, token }) => {
  return fetch(url, {
    method,
    cache: "no-cache",
    headers: {
      ...(apiKey ? { "X-Api-Key": apiKey } : {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      "Content-Type": "application/json",
      accept: "*/*",
    },
    ...(data ? { body: JSON.stringify(data) } : {}),
  }).then((response) => {
    if (response.status === 200) return response.json()
    if (response.status === 204) return null
    throw new Error(`${url} (${response.status})`)
  })
}

const getUrl = (url) => {
  return getHost() === "local" ? `${CONFIG.local}${url}` : url
}

const requestUserData = async ({ email, password }) => {
  const data = await request({
    url: getUrl(CONFIG.userDataAll),
    method: "POST",
    data: { siteId: 1, email: email, password: password },
  })
  return { userId: data.user.id, token: data.token }
}

const createUI = async ({ accounts, fsboDebug }) => {
  const html = `
    ${await UI.header()}
    ${UI.infos(fsboDebug)}
    ${UI.listUser(accounts, UI.formAddUser())}
    ${UI.footer()}
  `

  return html
}

const setUserData = ({ token, userId }) => {
  const domain = getHost() === "prod" ? CONFIG.domainProd : CONFIG.domainRct
  document.cookie = `${CONFIG.keyToken}=${token}; Domain=${domain};path=/`

  localStorage.setItem(CONFIG.keyToken, token)
  localStorage.setItem(CONFIG.keyUserId, userId)
}

const clearUserData = () => {
  const domain = getHost() === "prod" ? CONFIG.domainProd : CONFIG.domainRct
  document.cookie = `${CONFIG.keyToken}=disconnected; Domain=${domain};path=/`
  localStorage.setItem(CONFIG.keyToken, "disconnected")
  localStorage.setItem(CONFIG.keyUserId, "")
}

const addUI = () => {
  const container = document.createElement("div")
  container.classList.add("m_container")
  document.body.appendChild(container)

  return container
}

const addStyles = () => {
  const style = document.createElement("style")
  style.innerHTML = styles()
  document.getElementsByTagName("head")[0].appendChild(style)
}

const getAccount = (id, accounts) => {
  const search = accounts.filter((account) => account.userId.toString() === id.toString())
  return search.length === 1 ? search[0] : null
}

const connected = async (account, accounts, cb) => {
  const data = await requestUserData(account)

  let dataWith2FAToken = {}

  if (getHost() !== "prod") {
    //2FA
    cb("connexion step 1/4")
    await request({
      token: data.token,
      url: getUrl(CONFIG.sendMfaCode),
      method: "GET",
    })
    cb("connexion step 2/4")

    const { code } = await request({
      url: `${CONFIG.getMfaCode}${data.userId}`,
      method: "GET",
      apiKey: CONFIG.getMfaCodeApiKey,
    })
    cb("connexion step 3/4")

    dataWith2FAToken = await request({
      token: data.token,
      url: getUrl(CONFIG.validateMfaCode),
      method: "POST",
      data: {
        code,
      },
    })
  }

  setUserData({ ...data, token: dataWith2FAToken.token ?? data.token })
  return accounts.map((acc) =>
    acc.userId === account.userId ? { ...acc, connected: true } : { ...acc, connected: false }
  )
}

const disconnected = (accounts) => {
  clearUserData()
  return accounts.map((acc) => ({ ...acc, connected: false }))
}

const getHost = () => {
  if (document.location.host.indexOf("localhost") !== -1) return "local"
  if (document.location.host.indexOf("preprod") !== -1) return "preprod"
  if (document.location.host === "www.seloger.com") return "prod"
  if (document.location.host.indexOf("-rct-" !== -1)) return "rct"
  return ""
}

const getUserId = () => {
  return localStorage.getItem(CONFIG.keyUserId)
}

const getToken = () => {
  return localStorage.getItem(CONFIG.keyToken) ?? ""
}

const isConnected = () => {
  return ((CONFIG?.keyToken && localStorage.getItem(CONFIG.keyToken)) || "").length > 100
}

const getFsboDebug = () => {
  return localStorage.getItem("fsbo-debug") === "true"
}

const setFsboDebug = (value) => {
  localStorage.setItem("fsbo-debug", value ? "true" : "false")
}

const addUser = async ({ email, password, isProd }) => {
  const accounts = (await GM.getValue("accounts", 0)) || []

  if (email === "" || password === "") return accounts
  if (accounts.filter((account) => account.email === email && account.isProd === isProd).length > 0)
    return accounts

  const userId = (await requestUserData({ email, password })).userId

  const newAccounts = [...accounts, { email, password, userId, isProd, connected: false }]

  await GM.setValue("accounts", newAccounts)

  return newAccounts
}

const deleteUser = async ({ userId }) => {
  const accounts = await GM.getValue("accounts", 0)
  const newAccounts = accounts.filter((account) => account.userId.toString() !== userId)

  await GM.setValue("accounts", newAccounts)

  return newAccounts
}

const refreshAccounts = async () => {
  return ((await GM.getValue("accounts", 0)) || []).map((account) => ({
    ...account,
    connected: isConnected() && getUserId() === account.userId.toString(),
  }))
}

const refreshUI = async ({ accounts, fsboDebug }) => {
  const container = document.body.querySelector(".m_container")
  container.innerHTML = await createUI({ accounts, fsboDebug })
}

const setFunnelData = (type) => {
  const data = JSON.parse(sessionStorage.getItem("funnelData") ?? "{}")

  sessionStorage.setItem(
    "funnelData",
    JSON.stringify({
      ...data,
      formData: FORM_DATA[type],
      stepperData: FORM_DATA.stepperData,
      listingLimitation: FORM_DATA.listingLimitation,
    })
  )
}

const clearSessionStorage = () => {
  sessionStorage.clear()
}

const message = (target, text) => {
  const oldText = target.innerText
  target.innerText = text
  window.setTimeout(() => {
    target.innerText = oldText
  }, 2000)
}

const done = (target) => {
  message(target, "done!")
}

const error = (target) => {
  message(target, "error!")
}

const changeURL = (url) => {
  const newLocation = document.location.href.replace(
    /(https\:\/\/)([www\.]*)(seloger).*(\.com)/,
    `$1$3${url}$4`
  )
  document.location.replace(newLocation)
}

const goURL = async (container, target, type) => {
  console.log(container, target, type)
  try {
    if (type === "list") {
      const url = getUrl(CONFIG.myListingsAll)
      if (getHost() === "local") window.open(url, "_blank")
      else document.location.replace(url)
    } else if (type === "formFSBO") {
      document.location.replace(CONFIG.addListingsFSBO)
    } else if (type === "formFRBO") {
      document.location.replace(CONFIG.addListingsFRBO)
    } else if (isConnected()) {
      const token = getToken()
      const listings = await request({
        url: getUrl(CONFIG.getListingsAll),
        method: "GET",
        token,
      })
        .then((data) => data.listings || [])
        .catch((e) => {
          throw e
        })

      const filterListings = listings
        .sort((a, b) => b.listingId - a.listingId)
        .filter((l) => l.transactionTypeId === 2)

      if (filterListings && filterListings[0] && filterListings[0].listingId) {
        const id = filterListings[0].listingId

        document.location.replace(
          `${type === "editFRBO" ? CONFIG.editListingFRBO : CONFIG.editListingFSBO}=${id}`
        )
      } else {
        error(target)
      }
    }
  } catch (e) {
    error(target)
    log(container, "Error redirection")
  }
}

const addListingId = async () => {
  const token = getToken()
  const listings = await request({
    url: getUrl(CONFIG.getListingsAll),
    method: "GET",
    token,
  }).then((data) => data.listings || [])

  return [...document.querySelectorAll("[data-testid^=section]")]
    .map((element) => {
      const id = element.dataset.testid.replace("section-", "")

      if (id.match(/^\d+$/)) {
        const div = document.createElement("div")
        div.innerText = id
        div.className = "m_listing_id"
        div.addEventListener("click", () => {
          console.log(
            `${TITLE} : `,
            listings.find((l) => l.listingId.toString() === id)
          )
        })
        return { element, div }
      }

      return null
    })
    .filter((item) => !!item)
}

const log = (container, text) => {
  container.querySelector(".m_log").innerHTML = text
}
;(async function () {
  "use strict"

  CONFIG = (await GM.getValue("config", 0)) || null
  let accounts = await refreshAccounts()
  let fsboDebug = getFsboDebug()

  const actions = {
    updateConfig: async (target, container) => {
      try {
        CONFIG = JSON.parse(container.querySelector("#m_config").value)
        await GM.setValue("config", CONFIG)
        done(target)
        refreshUI({ accounts, fsboDebug })
      } catch (e) {
        error(target)
      }
    },
    sessionClear: (target) => {
      clearSessionStorage()
      done(target)
    },
    autoFillFSBOForm: (target) => {
      setFunnelData(target.dataset?.id)
      done(target)
    },
    setFSBODebug: () => {
      fsboDebug = !fsboDebug
      setFsboDebug(fsboDebug)
      refreshUI({ accounts, fsboDebug })
    },
    copyInput: (target) => {
      target.select()
      navigator.clipboard.writeText(target.value)
    },
    copyAccount: (target, id) => {
      const account = getAccount(id, accounts)
      if (account) {
        navigator.clipboard.writeText(`${account.email}, ${account.password}`)
        done(target)
      } else {
        error(target)
      }
    },
    deleteUser: async (id) => {
      const result = confirm("Want to delete?")
      if (result) {
        accounts = await deleteUser({
          userId: id,
        })
        refreshUI({ accounts, fsboDebug })
      }
    },
    addUser: async (target, container) => {
      try {
        accounts = await addUser({
          email: container.querySelector("#m_email").value.trim(),
          password: container.querySelector("#m_password").value.trim(),
          isProd: container.querySelector("#m_is_prod").value === "prod",
        })
        refreshUI({ accounts, fsboDebug })
      } catch (e) {
        error(target)
      }
    },
    connexion: async (target, container, id) => {
      const account = getAccount(id, accounts)

      if (account) {
        if (isConnected()) {
          accounts = disconnected(accounts)
          window.setTimeout(async () => {
            document.location.reload()
          }, 200)
        } else {
          try {
            log(container, "connexion...")
            accounts = await connected(account, accounts, (mess) => {
              log(container, mess)
            })
            log(container, `Connecté!`)

            window.setTimeout(async () => {
              document.location.reload()
            }, 200)
          } catch (e) {
            log(container, `Connexion Error : ${e.message}`)
          }
        }
      } else {
        error(target)
      }
    },
    goURL: async (target) => {
      const type = target.dataset?.id
      await goURL(container, target, type)
    },
    changeURL: (target) => {
      const url = target.dataset?.id
      changeURL(url)
    },
    addListingId: async (target) => {
      const elts = await addListingId()
      if (elts.length > 0) {
        elts.forEach((elt) => elt.element.appendChild(elt.div))
        done(target)
      } else {
        error(target)
      }
    },
  }

  addStyles()
  const container = addUI()
  refreshUI({ accounts, fsboDebug })

  container.addEventListener("click", async (e) => {
    const id = e.target.closest("li")?.dataset?.id
    const target = e.target

    if (target.className === "m_update_config") actions.updateConfig(target, container)
    else if (target.id === "m_config") return
    else if (!CONFIG) alert("please add configuration")
    else if (target.className === "m_connexion" && id) actions.connexion(target, container, id)
    else if (target.className === "m_add") actions.addUser(target, container)
    else if (target.className === "m_debug") actions.setFSBODebug()
    else if (target.className === "m_clear") actions.sessionClear(target)
    else if (target.className === "m_auto_form") actions.autoFillFSBOForm(target)
    else if (target.className === "m_links") actions.goURL(target)
    else if (target.className.includes("m_server")) actions.changeURL(target)
    else if (target.className === "m_add_listing_id") actions.addListingId(target)
    else if (target.className === "m_delete" && id) actions.deleteUser(id)
    else if (target.className === "m_copy" && id) actions.copyAccount(target, id)
    else if (target.nodeName === "INPUT" && id) actions.copyInput(target)
  })

  window.addEventListener("storage", async () => {
    fsboDebug = getFsboDebug()
    refreshUI({ accounts, fsboDebug })
  })

  loadAnim() // USELESS
})()

//START USELESS
function loadScript(url) {
  return new Promise((resolve) => {
    const script = document.createElement("script")
    script.src = url
    script.onload = () => {
      resolve()
    }
    document.head.appendChild(script)
  })
}

function loadcss(url) {
  return new Promise((resolve) => {
    const fileref = document.createElement("link")
    fileref.rel = "stylesheet"
    fileref.type = "text/css"
    fileref.href = url
    fileref.onload = () => {
      resolve()
    }
    document.head.appendChild(fileref)
  })
}

function loadAnim() {
  let load = false
  let particles

  document.body.querySelector(".m_container").addEventListener("mouseover", async (e) => {
    if (e.target.className === "m_anim") {
      if (!load) {
        await loadScript(CONFIG.animJs)
        await loadScript(CONFIG.particlesJs)
        await loadcss(CONFIG.particlesCss)
        load = true
      }

      if (!document.body.querySelector(".m_container .particles")) {
        particles = new Particles(".m_anim")
      }
      particles.disintegrate()
      window.setTimeout(() => {
        particles.integrate()
      }, 4000)
    }
  })
}
//END USELESS
