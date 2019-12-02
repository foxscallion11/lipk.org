  var nightAndDaySvg = "<svg height=\"35px\" viewBox=\"0 0 512 512\" width=\"512pt\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m512 256c0 141.386719-114.613281 256-256 256s-256-114.613281-256-256 114.613281-256 256-256 256 114.613281 256 256zm0 0\" fill=\"#4a7aff\"/><g fill=\"#2864f0\"><path d=\"m147.460938 168.671875 278.628906 278.632813c7.476562-6.652344 14.5625-13.738282 21.214844-21.214844l-278.632813-278.628906zm0 0\"/><path d=\"m297.613281 508.613281c23.507813-3.84375 45.9375-10.886719 66.828125-20.671875l-246.941406-246.941406-57.5 30zm0 0\"/><path d=\"m271 60-30 57.5 246.941406 246.941406c9.785156-20.890625 16.828125-43.320312 20.671875-66.828125zm0 0\"/></g><path d=\"m256 135.128906c-66.753906 0-120.871094 54.117188-120.871094 120.871094 0 33.578125 13.695313 63.957031 35.804688 85.859375l170.925781-170.925781c-21.902344-22.109375-52.28125-35.804688-85.859375-35.804688zm0 0\" fill=\"#fdba12\"/><path d=\"m341.859375 170.933594c-21.902344-22.109375-52.28125-35.804688-85.859375-35.804688-33.527344 0-63.867188 13.65625-85.761719 35.703125l85.859375 85.863281zm0 0\" fill=\"#ffa300\"/><path d=\"m256 175.332031c-44.550781 0-80.667969 36.117188-80.667969 80.667969 0 22.476562 9.203125 42.800781 24.035157 57.425781l114.058593-114.058593c-14.625-14.832032-34.949219-24.035157-57.425781-24.035157zm0 0\" fill=\"#fcda15\"/><path d=\"m313.425781 199.367188c-14.625-14.832032-34.949219-24.035157-57.425781-24.035157-22.425781 0-42.710938 9.160157-57.328125 23.933594l57.425781 57.425781zm0 0\" fill=\"#ffd400\"/><path d=\"m241 60h30v57.5h-30zm0 0\" fill=\"#ffa300\"/><path d=\"m60 241h57.5v30h-57.5zm0 0\" fill=\"#fdba12\"/><path d=\"m343.324219 147.460938 40.660156-40.660157 11.003906 11.003907-40.660156 40.660156zm0 0\" fill=\"#ffa300\"/><path d=\"m106.796875 383.984375 40.660156-40.660156 11 11.003906-40.65625 40.660156zm0 0\" fill=\"#fdba12\"/><path d=\"m106.796875 128.015625 21.214844-21.214844 40.65625 40.660157-21.210938 21.210937zm0 0\" fill=\"#fdba12\"/><path d=\"m117.109375 117.707031 10.902344-10.90625 40.660156 40.660157-10.90625 10.902343zm0 0\" fill=\"#ffa300\"/><path d=\"m72.722656 434.703125c.753906.773437 1.492188 1.550781 2.257813 2.316406 99.972656 99.972657 262.0625 99.972657 362.039062 0 99.972657-99.972656 99.972657-262.066406 0-362.039062-.765625-.765625-1.542969-1.503907-2.316406-2.257813zm0 0\" fill=\"#414952\"/><path d=\"m437.019531 74.980469c-.765625-.765625-1.542969-1.503907-2.316406-2.257813l-181.289063 181.289063 183.304688 183.300781c.097656-.097656.203125-.195312.300781-.292969 99.972657-99.972656 99.972657-262.066406 0-362.039062zm0 0\" fill=\"#333940\"/><path d=\"m362.242188 279.308594c0 42.292968-34.28125 76.578125-76.574219 76.578125-21.414063 0-40.773438-8.796875-54.671875-22.964844 9.347656 39.722656 45.015625 69.296875 87.59375 69.296875 49.699218 0 89.988281-40.289062 89.984375-89.988281 0-42.578125-29.570313-78.246094-69.296875-87.59375 14.171875 13.894531 22.964844 33.253906 22.964844 54.671875zm0 0\" fill=\"#fff\"/><path d=\"m408.578125 312.230469c0-42.578125-29.574219-78.246094-69.300781-87.59375 14.171875 13.898437 22.96875 33.257812 22.96875 54.671875 0 22.917968-10.082032 43.464844-26.03125 57.5l42.429687 42.429687c18.371094-16.472656 29.933594-40.390625 29.933594-67.007812zm0 0\" fill=\"#e9edf5\"/></svg>"
  var options = {
    bottom: '64px', // default: '32px'
    right: '32px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#000',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: nightAndDaySvg, // default: ''
    autoMatchOsTheme: true // default: true
  }
  const darkmode = new Darkmode(options);
  darkmode.showWidget();
  var darkmodeLS =  window.localStorage.getItem('darkmode');
  var darkButton = document.getElementsByClassName("darkmode-toggle")[0];
  var utterances = document.getElementById("utterances");
  darkButton.addEventListener("click", () => {
    var isMsg = document.getElementById("utterancesMsg");
    if (isMsg) {
      isMsg.remove();
    }

    var utterancesMsg = document.createElement('div')
    utterancesMsg.setAttribute("id", "utterancesMsg");
    utterancesMsg.classList.add("darkmode-ignore");
    if (darkmodeLS && darkmodeLS === "true" && darkmodeLS !== window.localStorage.getItem('darkmode')) {
      utterancesMsg.innerText =
        "If you need to read in day mode," +
        " the comments will switch to day mode after refreshing the page." +
        "刷新页面评论切换为白天模式。";
      utterances.insertBefore(utterancesMsg, utterances.children[0]);
    } else if(darkmodeLS && darkmodeLS === "false" && darkmodeLS !== window.localStorage.getItem('darkmode')) {
      utterancesMsg.innerText =
        "If you need to read in night mode," +
        " the comments will switch to night mode after refreshing the page." +
        "刷新页面评论切换为黑夜模式。";
      utterances.insertBefore(utterancesMsg, utterances.children[0]);
    }
  });
