$msg = <<MSG
----------------------------------------------------------
The machine is up and running. Visit the application here:

  http://localhost:4000
----------------------------------------------------------
MSG

Vagrant.configure("2") do |node|
  node.vm.post_up_message = $msg
  node.vm.box = "ubuntu/bionic64"
  node.vm.network "forwarded_port", guest: 4000, host: 4000
  node.vm.provision "ansible" do |ansible|
    ansible.playbook = "node.yml"
    ansible.compatibility_mode = "2.0"
  end
end
