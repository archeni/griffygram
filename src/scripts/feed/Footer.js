const footerRep = document.getElementById('footer');

export const footerToDom = () => {
  footerRep.innerHTML = `
  <footer class="footer">
      <div class="footer__item">
        <p>Copyright to Traye Johnson and the Seditious Spirits.</p>
          Posts since <select id="yearSelection">
              <option>2020</option>
              <option>2019</option>
              <option>2018</option>
              <option>2017</option>
          </select>
          <span id="postCount">0</span>
      </div>
  </footer>
  `
}
