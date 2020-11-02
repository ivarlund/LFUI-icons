const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const path = require('path');


module.exports = {
  plugins: [
    new SVGSpritemapPlugin('src/svg/20/*.svg', {
      sprite: {
        prefix: 'icon-',
        gutter: 4,
        generate: {
          title: false
        }
      },
      output: {
        filename : '20/' + 'icons.svg',
        svgo: {
          plugins: [{
            convertColors: {currentColor: '#FF0000'}  // test with true and see how it works with multicolor
          }],
        },
      }
    }),
    new SVGSpritemapPlugin('src/svg/20-color/*.svg', {
      sprite: {
        prefix: 'icon-',
        gutter: 4,
        generate: {
          title: false
        }
      },
      output: {
        filename : '20-color/' + 'icons.svg',
      }
    }),
    new SVGSpritemapPlugin('src/svg/24/*.svg', {
      sprite: {
        prefix: 'icon-',
        gutter: 4,
        generate: {
          title: false
        }
      },
      output: {
        filename : '24/' + 'icons.svg',
        svgo: {
          plugins: [{
            convertColors: {currentColor: '#FF0000'}  // test with true and see how it works with multicolor
          }],
        },
      }
    }),
    new SVGSpritemapPlugin('src/svg/24-color/*.svg', {
      sprite: {
        prefix: 'icon-',
        gutter: 4,
        generate: {
          title: false
        }
      },
      output: {
        filename : '24-color/' + 'icons.svg',
      }
    }),
    new SVGSpritemapPlugin('src/svg/32/*.svg', {
      sprite: {
        prefix: 'icon-',
        gutter: 4,
        generate: {
          title: false
        }
      },
      output: {
        filename : '32/' + 'icons.svg',
        svgo: {
          plugins: [{
            convertColors: {currentColor: '#FF0000'}  // test with true and see how it works with multicolor
          }],
        },
      }
    }),
    new SVGSpritemapPlugin('src/svg/32-color/*.svg', {
      sprite: {
        prefix: 'icon-',
        gutter: 4,
        generate: {
          title: false
        }
      },
      output: {
        filename : '32-color/' + 'icons.svg',
      }
    }),
    new SVGSpritemapPlugin('src/svg/40/*.svg', {
      sprite: {
        prefix: 'icon-',
        gutter: 4,
        generate: {
          title: false
        }
      },
      output: {
        filename : '40/' + 'icons.svg',
        svgo: {
          plugins: [{
            convertColors: {currentColor: '#FF0000'}  // test with true and see how it works with multicolor
          }],
        },
      }
    }),
    new SVGSpritemapPlugin('src/svg/40-color/*.svg', {
      sprite: {
        prefix: 'icon-',
        gutter: 4,
        generate: {
          title: false
        }
      },
      output: {
        filename : '40-color/' + 'icons.svg',
      }
    }),
    new SVGSpritemapPlugin('src/svg/70/*.svg', {
      sprite: {
        prefix: 'icon-',
        gutter: 4,
        generate: {
          title: false
        }
      },
      output: {
        filename : '70/' + 'icons.svg',
        svgo: {
          plugins: [{
            convertColors: {currentColor: '#FF0000'}  // test with true and see how it works with multicolor
          }],
        },
      }
    }),
    new SVGSpritemapPlugin('src/svg/70-color/*.svg', {
      sprite: {
        prefix: 'icon-',
        gutter: 4,
        generate: {
          title: false
        }
      },
      output: {
        filename : '70-color/' + 'icons.svg',
      }
    }),
    new SVGSpritemapPlugin('src/svg/special/**/*.svg', {
      sprite: {
        prefix: 'icon-',
        gutter: 4,
        generate: {
          title: false
        }
      },
      output: {
        filename : 'special/' + 'icons.svg',
        svgo: {
          plugins: [{
            convertColors: {currentColor: '#FF0000'}  // test with true and see how it works with multicolor
          }],
        },
      }
    }),
  ]
};

