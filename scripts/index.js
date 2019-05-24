var app = new Vue({
  el: '#wrapper',
	mounted: function () {
    window.addEventListener('scroll', this.onScroll);
  },
  data: function() {
    return {
      points: [

          { hex: "#3f656f", title: "Research"},
          { hex: "#b1d2da", title: "Projects" },
          { hex: "#8fd7f4", title: "Résumé" },
          { hex: "#EFBEAB", title: "Small talk"}
      ],
      projects: [
          { id: 1,
              name: 'SimPrints ID for Web',
              info: 'A progressive web app port a middle-man Android application developed as part of the HackNY Social Good program. This chrome extension uses the Web BlueTooth library to connect to a fingerprint scanner over BlueTooth 4.0 without separate software drivers.',
              link: '',
              date: 'Summer 2018'
          },
          { id: 2,
              name: 'SJF Visualizer',
              info: 'My final project submission for CS411: Operating Systems at Eckerd College. This interactive tool demonstrates how a shortest-job-first CPU scheduler works in real time with user-created inputs.',
              link: '/sjf',
              date: 'December 2017'
          },
          { id: 3,
              name: 'PcarnBase',
              info: 'While working at Hong Kong Baptist University, I was asked to update the content of a recently-published database my supervisor had contributed genomic data to. In the meantime, I implemented interactive protein pathway maps.',
              link: 'http://www.comp.hkbu.edu.hk/~db/PcarnBase',
              date: 'Summer 2016'
          },
          { id: 4,
              name: 'egpuDIY.com',
              info: 'Conceived between semesters as a way for somebody interested in external graphics cards (or eGPUs) to gauge the gaming performance of a hypothetical eGPU system. All calculations were collected, stored, and cited by hand. Developed with the help of Truong Ngyuen of egpu.io.',
              link: 'http://www.egpudiy.com',
              date: 'Summer 2017',
          },

      ],
      research: [
          {id: 1,
            name: 'Bioinformatics Research Aide, Eckerd College/Woods Hole',
              info: 'Conducted sequence analysis and data visualization for a study of population connectivity in Sargasso Sea by ' +
              'leveraging bioinformatics toolsets to illustrate haplotype networks obtained from DNA barcodes found in 𝘓𝘪𝘵𝘪𝘰𝘱𝘢 𝘮𝘦𝘭𝘢𝘯𝘰𝘴𝘵𝘳𝘰𝘮𝘢.',
              link: '#',
            date: 'Spring - Fall 2017'
          },
          {id: 2,
            name: 'Aquaponics Research Aide, Eckerd College',
              info: 'Developed experimental designs to engineer a more efficient use of food waste in aquaculture ecosystems and ' +
              'maintained a 1,000 Gal tank stocked with Tilapia and Catfish with water flow through bacteria filter tank feeding raceways of hydroponic rafts.',
              link: '#',
            date: 'Fall 2014 - Summer 2015'
          },
          {id: 3,
              name: 'Cuttyhunk Island Kelp Project, The Wheeler School',
              info: 'Biological and policy research to identify a hybrid strain of suitably adapted luminaria seaweed (kelp) to meet demand for cosmetics and food industry reduced by Japan nuclear reactor incident impacting Pacific Ocean.',
              link: '#',
              date: 'Fall 2013 - Summer 2014'

          }

      ],
      blog: [
          {

          }
      ],
      showProjects: false,
        showResearch: false,
        showResume: false,
        showBlog: false
    }
  }
});