import { useState } from 'react';
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  onClose?: () => void; 
  onLoginSuccess?: () => void; 
}

const Login = ({ onClose, onLoginSuccess }: LoginProps) => { 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { username, password });
    
    navigate('/home'); 

    if (onClose) {
      onClose();
    }
    if (onLoginSuccess) { 
      onLoginSuccess();
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f2f2f2' }}>
      <div className="verticalcenter flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <a href="#">
          <img
            id="logo-tengah"
            className="mx-auto h-28 w-auto mb-4"
            src="/images/pemkab-bone.png"
            alt="Logo"
          />
        </a>
        <h1 className="text-center text-3xl font-normal text-gray-800">
          Website <b style={{ color: 'rgb(35, 110, 21)' }}>OPD</b>
        </h1>
        <h3 className="text-center text-xl font-normal text-gray-600 -mt-2 mb-6">
          Kabupaten Bone
        </h3>

        <div className="panel panel-primary bg-white rounded shadow max-w-md w-full overflow-hidden">
          <div className="panel-body p-8">
            <div className="alert alert-info center text-sm px-4 py-3 rounded-md mb-6 text-center"
                 style={{ backgroundColor: '#ddf4fa', borderColor: '#84d8ed', color: '#157890', borderWidth: '1px' }}>
              <h5>Selamat Datang di Portal Resmi Perangkat Daerah Pemerintah Kabupaten Bone.</h5>
            </div>

            <h4 className="text-center text-xl font-normal text-gray-800 mb-6">Silahkan Login</h4>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="relative flex items-center border border-gray-300 rounded-md shadow-sm">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center bg-gray-100 border-r border-gray-300 pr-2 rounded-l-md">
                    <UserIcon className="h-5 w-5 text-gray-500" />
                  </span>
                  <input
                    type="text"
                    className="form-control block w-full pl-12 pr-3 py-2 leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-r-md"
                    name="a"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="relative flex items-center border border-gray-300 rounded-md shadow-sm">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center bg-gray-100 border-r border-gray-300 pr-2 rounded-l-md">
                    <LockClosedIcon className="h-5 w-5 text-gray-500" />
                  </span>
                  <input
                    type="password"
                    className="form-control block w-full pl-12 pr-3 py-2 leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-r-md"
                    name="b"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="alert alert-info center text-sm px-4 py-3 rounded-md"
                   style={{ backgroundColor: '#ddf4fa', borderColor: '#84d8ed', color: '#157890', borderWidth: '1px' }}>
                Pemerintah terus melakukan inovasi dibidang Teknologi Informasi dengan menyediakan website resmi yang berfungsi sebagai media informasi, komunikasi, pendidikan, promosi daerah.
              </div>

              <div className="panel-footer flex justify-end pt-4">
                <input type="reset" name="reset" className="btn btn-default inline-flex justify-center py-2 px-5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 mr-3" value="Reset" />
                <input type="submit" name="submit" id="submit" className="btn btn-primary inline-flex justify-center py-2 px-5 border border-transparent shadow-sm text-sm font-medium rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" value="Log In" />
              </div>
            </form>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm py-4" style={{ color: '#A9A9A9' }}>Copyright ©2017 - 2025 Programmer Tim e-Gov</p>

        <div className="panel panel-primary max-w-md w-full overflow-hidden">
          <p className="text-center text-sm text-gray-600">
            Website Pemerintah merupakan Salah Satu Komponen dari Peraturan Presiden (Perpres) Nomor 95 Tahun 2018 tentang Sistem Pemerintahan Berbasis Elektronik (SPBE).
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="http://www.pesisirselatankab.go.id" target="_blank" rel="noopener noreferrer" title="Portal Resmi Pemerintah Kab. Bone">
              <img src="https://www.repository.pesisirselatankab.go.id/ast-adm/assets/images/logo-pessel.png" alt="Logo Pessel" className="h-8 w-auto" />
            </a>
            <a href="https://spbe.menpan.go.id/" target="_blank" rel="noopener noreferrer" title="Sistem Pemerintahan Berbasis Elektronik">
              <img src="https://www.repository.pesisirselatankab.go.id/ast-adm/assets/images/logo-spbe.png" alt="Logo SPBE" className="h-8 w-auto" />
            </a>
            <a href="https://www.rapidssl.com" target="_blank" rel="noopener noreferrer" title="Website ini dilindungi dengan Sertifikat SSL dari RapidSSL">
              <img src="https://www.repository.pesisirselatankab.go.id/ast-adm/assets/images/rapid-ssl.png" alt="RapidSSL" className="h-8 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;