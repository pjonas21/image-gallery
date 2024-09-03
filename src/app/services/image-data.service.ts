import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageDataService {

  constructor() { }

  getImages() {
    return [
      {id: 1, title: "Minecraft", url: "https://gogamers.gg/wp-content/uploads/2022/09/minecraft-divulgacao-optimized.png"},
      {id: 2, title: "SubWay Surfers", url: "https://s2-techtudo.glbimg.com/dLHiEFov94ONVIVLP2V85FWh7hE=/0x0:695x390/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/3/t/9vl0fdRyi9SvlPOe33yA/subway-surfers-mais-baixado-downloads-decada-2010-2019.jpg"},
      {id: 3, title: "Mario", url: "https://ogimg.infoglobo.com.br/in/23001849-c2f-667/FT1086A/INFOCHPDPICT000041975439.jpg"},
      {id: 4, title: "Fortnite", url: "https://jornadageek.com/wp-content/uploads/2021/09/imagem-do-jogo-fortnite.webp"},
      {id: 5, title: "Free Fire", url: "https://cdn.maioresemelhores.com/imagens/mm-melhores-jogos-para-android-free-fire.jpg"},
      {id: 6, title: "Star Wars: Outlaws", url: "https://s2-techtudo.glbimg.com/eAhZlAPoaKbJcigMiZg40INZJ-w=/0x0:768x432/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/H/x/l4X2NpScaqLBNDahpAvA/star-wars-outlaws-key-art-articl.jpg"},
      {id: 7, title: "CS:GO", url: "https://s2-ge.glbimg.com/BsRH4rij3O7pZ-gj3JCCLNFcFw0=/0x0:1100x618/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/Y/i/dULbPDQDC1fIKuUQQRug/csgo-image.jpg"},
      {id: 8, title: "DOTA 2", url: "https://www.pichauarena.com.br/wp-content/uploads/2019/05/basic.jpg"},
      {id: 9, title: "LineAge II", url: "https://www.zonammorpg.com/wp-content/uploads/2017/12/Lineage-2-Revolution_PR-1620x800.jpg"},
      {id: 10, title: "Battlefield 2042", url: "https://t2.tudocdn.net/595870?w=1920"},
    ]
  }
}
