export default function Footer(){
  return (
    <div className="footer bg-green-700 font-serif text-white w-full px-16 flex justify-between">
      <div className="flex">
        <div className="p-6">
          <h2 className="font-bold m-2 text-xl">Legal</h2>
          <ul className="underline">
            <li className="m-2">
              <a href="#" title="Kişisel verilerin korunması">
                Kişisel Verilerin Korunması
              </a>
            </li>
            <li className="m-2">
              <a href="#" title="Link to Unilever cookie notice">
                Çerezler Hakkında Bildirim
              </a>
            </li>
            <li className="m-2">
              <a href="#" title="Gizlilik Politikası">
                Gizlilik Politikası
              </a>
            </li>
            <li className="m-2">
              <a title="Yasal uyarı" href="#">
                Yasal Uyarı
              </a>
            </li>
          </ul>
        </div>
        <div className="p-6">
          <h2 className="font-bold m-2 text-xl">Yardım</h2>
          <ul className="underline">
            <li className="m-2">
              <a href="#" title="Link to Knorr FAQ">
                Sıkça Sorulan Sorular
              </a>
            </li>
            <li className="m-2">
              <a href="#" title="Link to Knorr Contact us page">
                İletişim
              </a>
            </li>
            <li className="m-2">
              <a href="#" title="Link to Knorr sitemap">
                Site Map
              </a>
            </li>
          </ul>
        </div>
        <div className="p-6">
          <h2 className="font-bold text-xl m-2">Bizi takip edin</h2>
          <ul className="underline">
            <li className="m-2">
              <a href="https://github.com/emektarkubra" target="_blank">
                Github
              </a>
            </li>
            <li className="m-2">
              <a
                href="https://www.linkedin.com/in/kübra-emektar-184103267/"
                target="_blank">
                Linkedin
              </a>
            </li>
            <li className="m-2">
              <a href="#" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="p-6">
        <ul>
          <li>
            <h2 className="font-bold text-xl m-2">Lokasyon</h2>
            <span className="m-2">TÜRKİYE</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
