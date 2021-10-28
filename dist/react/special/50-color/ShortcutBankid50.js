import * as React from "react";

function ShortcutBankid50({ title, titleId, ...props }) {
  return (
    <svg width={50} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path
          d="M34.458 17.893c-.012.423-.075.84-.148 1.256-.106.6-.27 1.181-.492 1.745a8.359 8.359 0 01-1.178 2.079 7.897 7.897 0 01-2.389 2.056c-.633.353-1.3.615-1.997.791-.334.084-.67.153-1.012.188-.182.017-.363.041-.546.051a17.89 17.89 0 01-.709.018c-.268.003-.536 0-.804 0h-.101l.673-4.463c.097-.005.19-.01.282-.017a4.114 4.114 0 001.147-.233c.47-.171.886-.436 1.225-.82a2.99 2.99 0 00.596-1.054c.122-.369.181-.75.208-1.138.022-.338 0-.669-.087-.994a1.79 1.79 0 00-.882-1.149 2.674 2.674 0 00-.821-.284 4.765 4.765 0 00-.873-.074h-1.236c-.174 0-.341-.031-.5-.103a.877.877 0 01-.302-.223c-.15-.17-.143-.407-.017-.611a1.28 1.28 0 01.34-.35c.143-.107.276-.224.39-.364.137-.168.232-.357.236-.58a.81.81 0 00-.214-.576c-.168-.184-.381-.276-.613-.331a2.128 2.128 0 00-.704-.05c-.43.04-.816.194-1.125.52a.894.894 0 00-.264.557c-.009.13.02.251.072.367.078.175.202.309.348.424a.667.667 0 01.21.249c.086.192.036.366-.07.531a1.052 1.052 0 01-.371.34 1.408 1.408 0 01-.594.187 4.132 4.132 0 01-.277.013c-.232.002-.463 0-.694 0h-.103c.009-.072.014-.136.023-.198l.235-1.538.323-2.137c.036-.241.075-.481.112-.72.003-.027.003-.054.005-.08h5.824c.022.004.044.01.066.01.29.006.578.03.866.06.325.033.648.08.968.143.67.133 1.322.33 1.944.63.663.322 1.257.742 1.753 1.308.335.383.601.812.807 1.283.154.351.269.716.346 1.093.064.312.118.627.124.948.001.058.01.116.017.174v.883c-.007.061-.016.122-.017.183zM15.793 16.228H16.703c.29-.002.572-.053.837-.177a1.45 1.45 0 00.687-.613c.211-.377.159-.77-.126-1.073-.054-.056-.116-.104-.171-.156-.045-.041-.09-.081-.13-.127-.158-.195-.157-.402.003-.597a1.2 1.2 0 01.587-.38c.343-.108.69-.098 1.034-.01a.78.78 0 01.31.156.466.466 0 01.098.58 1.346 1.346 0 01-.402.423c-.153.113-.293.24-.403.398a.972.972 0 00-.192.632c.011.183.08.342.195.478a1.303 1.303 0 00.973.454c.294.002.587 0 .88 0h.101c-.013.106-.025.201-.04.296l-.146.956-.185 1.208-.191 1.27c-.059.387-.12.775-.178 1.163-.042.273-.092.544-.12.818-.058.557-.16 1.107-.24 1.66-.077.537-.159 1.073-.239 1.61-.04.271-.08.544-.122.816-.003.02-.01.04-.015.06h-5.197l1.482-9.845M15.084 29.618c.129.016.447.013.545-.01a.546.546 0 00.456-.495c.033-.232-.076-.4-.298-.44-.102-.02-.208-.018-.311-.022-.081-.003-.163 0-.248 0l-.144.967m-.24 1.629c.018.004.028.008.04.008.154 0 .31.003.464-.003.07-.003.14-.02.206-.043a.535.535 0 00.296-.235.749.749 0 00.093-.299c.02-.161-.054-.315-.176-.379a.597.597 0 00-.275-.073h-.423c-.025 0-.049.005-.076.008l-.15 1.016m-1.379.516c.01-.03.025-.058.03-.089.06-.397.117-.794.177-1.19.043-.293.088-.586.132-.878.049-.33.1-.66.148-.99.027-.18.052-.36.079-.548.025-.002.05-.006.074-.006.724 0 1.45-.004 2.174.002.241.002.477.052.68.202.16.119.253.28.27.486a.906.906 0 01-.403.862c-.056.04-.117.07-.176.105l-.082.048.164.085a.84.84 0 01.38.376c.067.14.084.289.07.445a1.288 1.288 0 01-.149.518 1.217 1.217 0 01-.822.621 1.47 1.47 0 01-.334.037c-.804.004-1.608.002-2.412.002v-.088M19.074 31.272c-.16.102-.337.184-.544.18-.137-.002-.265-.116-.244-.3a.36.36 0 01.203-.294c.085-.043.176-.076.266-.11.066-.024.134-.041.201-.065.066-.024.13-.052.205-.082l-.087.671m1.21-.197c-.078-.019-.116-.068-.116-.15 0-.059 0-.118.009-.176.045-.319.1-.636.137-.956a.744.744 0 00-.155-.577.864.864 0 00-.376-.258c-.254-.098-.52-.103-.784-.086-.437.028-.823.204-1.178.462-.029.021-.037.047-.042.08-.03.213-.063.424-.095.635l-.023.183c.028-.016.045-.025.061-.036.064-.043.127-.087.192-.129.22-.14.446-.263.703-.31.138-.027.278-.038.418-.008.135.028.204.104.215.243.005.058-.008.104-.067.126-.127.049-.251.103-.38.144-.236.074-.477.137-.713.21a.947.947 0 00-.587.473.709.709 0 00-.068.487c.057.259.242.374.471.435.044.011.087.024.13.037h.355c.193-.038.386-.074.565-.16.074-.036.146-.075.222-.115a.478.478 0 00.248.209c.071.024.146.038.22.056l.032.01h.407c.04-.008.065-.031.081-.075.075-.19.154-.379.23-.568l.062-.157c-.064-.01-.12-.016-.174-.03M32.693 30.482a.83.83 0 01-.597.432c-.198.041-.398.024-.611.025.094-.658.194-1.307.29-1.97.222-.002.437-.022.645.043.262.083.409.277.445.553.043.324-.021.632-.172.917m1.363-1.404a1.385 1.385 0 00-.775-.86 1.84 1.84 0 00-.757-.154c-.604-.002-1.208 0-1.811 0h-.084a18279 18279 0 01-.562 3.786h2.02c.175 0 .349-.015.52-.055.349-.083.653-.253.909-.513.22-.223.38-.487.49-.783.173-.467.213-.942.05-1.421M23.704 31.847c.006-.021.012-.04.015-.06a1293.018 1293.018 0 01.27-1.826 1.47 1.47 0 00.005-.506.671.671 0 00-.356-.496c-.209-.109-.431-.107-.653-.08a1.177 1.177 0 00-.583.26c-.053.042-.107.083-.172.132l.046-.358H21.16c-.144.978-.29 1.953-.435 2.933h1.115l.015-.071.127-.852c.034-.236.068-.47.104-.705.005-.034.009-.073.027-.1.105-.148.234-.265.415-.293.158-.023.318.048.31.27a2.405 2.405 0 01-.028.262c-.048.333-.099.667-.148 1l-.072.49h1.113M24.837 28.066c-.006.028-.012.05-.015.072l-.16 1.078-.229 1.538c-.043.29-.089.579-.129.869-.01.072-.037.146-.02.224h1.105c.066-.441.133-.882.2-1.338.019.023.028.033.035.045.256.411.512.822.767 1.235.027.044.055.063.108.063.42-.002.84-.001 1.26-.001.02 0 .038-.002.075-.004l-1.09-1.68 1.365-1.253c-.048-.003-.075-.005-.102-.005-.37 0-.739.007-1.108-.004a.392.392 0 00-.312.13c-.238.237-.482.466-.726.698-.052.051-.107.1-.162.149.07-.609.167-1.208.25-1.815h-1.112M28.741 28.068l-.56 3.778h1.281l.561-3.778h-1.282z"
          fill="#005AA0"
        />
        <path fill="#005AA0" d="M7 3v35h36V10h-2v26H9V5h28V3z" />
        <path
          fill="#E30613"
          d="M44.45.843l-1.414 1.414 1.414 1.415 1.414-1.415zM43.743 4.379l-1.415-1.415-4.95 4.95 1.415 1.414zM35.257 11.45l2.829-1.414-1.414-1.415z"
        />
      </g>
    </svg>
  );
}

export default ShortcutBankid50;
