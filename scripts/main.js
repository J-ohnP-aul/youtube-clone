let vidHmtl = "";

videodata.forEach((vidDtb) => {
  vidHmtl += `
        <div class="video-preview-1">
          <div class="thumbnail-row">
            <img class="thumbnail" src="${vidDtb.vidPic}">
            <div class="video-time">${vidDtb.vidTime}</div>
          </div>
          <div class="video-info-grid">
            <div class="channel-pic">
              <img class="profile-picture" src="${vidDtb.chnlPic}">
            </div>
            <div class="video-info">
              <p class="video-title">
                ${vidDtb.vidTitle}
              </p>
              <p class="video-author">
                ${vidDtb.vidAuthor}
              </p>
              <p class="video-stats">       
                ${vidDtb.vidStats}
              </p>
            </div>      
          </div>      
        </div>
  `;

})
document.querySelector('.video-grid')
  .innerHTML = vidHmtl;
  