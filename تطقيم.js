import _0x33060d from 'node-fetch';
let handler = async (_0x595e2c, {
  conn: _0x3c7214
}) => {
  let _0x4e6e15 = await (await _0x33060d("https://raw.githubusercontent.com/KazukoGans/database/main/anime/ppcouple.json")).json();
  let _0x4e0e83 = _0x4e6e15[Math.floor(Math.random() * _0x4e6e15.length)];
  let _0xcefd42 = await (await _0x33060d(_0x4e0e83.cowo)).buffer();
  await _0x3c7214.sendFile(_0x595e2c.chat, _0xcefd42, '', "ماتشينج لولد 👦رقم المطور 212695642360", _0x595e2c);
  let _0x4ccbd9 = await (await _0x33060d(_0x4e0e83.cewe)).buffer();
  await _0x3c7214.sendFile(_0x595e2c.chat, _0x4ccbd9, '', "ماتشينج لبنت 👧رقم المطور 212695642360", _0x595e2c);
};
handler.help = ["ppcouple", "ppcp"];
handler.tags = ["internet"];
handler.command = ["طقم", "تطقيم"];
export default handler;