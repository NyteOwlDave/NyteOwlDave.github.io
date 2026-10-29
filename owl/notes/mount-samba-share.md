
<!-- [[ TODO ]]

- Icon Link
- Viewport META Tag

-->

<style>
@import url("https://nyteowldave.github.io/owl/owl.css");
</style>

<style>
li input {
    width : calc( 100vw - 120px );
}
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<h3 id="_T_"> Mount Samba Share </h3>

# AI Overview

----------------------------------------------------------------

## Prompt

- <input value="how to mount an smb share from the ubuntu terminal" />

----------------------------------------------------------------

## Response

To mount an `SMB` share from the `Ubuntu` terminal, you use the
`mount -t cifs` command.

Here is how to do it manually, followed by how to set up an
automatic persistent mount.

----------------------------------------------------------------

## Step 1: Install Dependencies

You need the `cifs-utils` package installed to handle
`SMB/CIFS` connections.

----------------------------------------------------------------

## Bash Scripts

```bash

sudo apt update && sudo apt install cifs-utils -y

```

----------------------------------------------------------------

## Step 2: Create a Local Mount Point

Create the local directory where you want the network folder to appear.

----------------------------------------------------------------

## Bash Scripts

```bash

sudo mkdir -p /mnt/[VOLUME]

```

<div center>
 <b>Where:</b> <code>[VOLUME]</code> is a placeholder
</div>

----------------------------------------------------------------

## Method A: Mount Manually (Temporary)

Run the following command, replacing the placeholder information
with your actual server IP, share name, and username:

Be advised that mounting will request a password to log in
to the Samba Service. This means the process can't be
automated using this Method.

----------------------------------------------------------------

## Bash Scripts

```bash

# Mount

sudo mount \
-t cifs    \
-o username=YOUR_USERNAME,uid=$(id -u),gid=$(id -g)  \
//[IP]/[SHARE] \
/mnt/[VOLUME]

# Unmount

sudo umount /mnt/[VOLUME]

```

<div center>
 <b>Where:</b>
<br>
 <ul>
  <li><code>[IP]</code> is a placeholder</li>
  <li><code>[SHARE]</code> is a placeholder</li>
  <li><code>[VOLUME]</code> is a placeholder</li>
 </ul>
</div>

----------------------------------------------------------------

## Method B: Mount Automatically on Boot (Persistent)

Instead of putting your password directly in a public text
file, create a hidden credentials file for security.

----------------------------------------------------------------

### Step 1. Create a credentials file:

----------------------------------------------------------------

### Bash Scripts

```bash

nano ~/.smbcredentials

```

----------------------------------------------------------------

### Step 2. Add Credentials

----------------------------------------------------------------

### Bash Scripts

```bash

username=YOUR_USERNAME
password=YOUR_PASSWORD

```

Save and exit.

----------------------------------------------------------------

### Step 3. Secure File Permissions

----------------------------------------------------------------

### Bash Scripts

```bash

chmod 600 ~/.smbcredentials

```

----------------------------------------------------------------

### Step 4. Edit the `FSTAB` Table

----------------------------------------------------------------

```bash

sudo nano /etc/fstab

```

----------------------------------------------------------------

### Step 5. Make These Changes

----------------------------------------------------------------

```bash

# Append at bottom of fstab

//SERVER_IP/SHARE_NAME     \
/mnt/[VOLUME] cifs         \
credentials=/home/[USER]/.smbcredentials,uid=[UID],gid=[GID],iocharset=utf8 0 0

```

----------------------------------------------------------------

<div center>
<details>
<summary>TIP</summary>
<p>
Use the <code>id</code> command for <code>[UID]</code>
and <code>[GID]</code>.
</p>
<p>
The <code>[VOLUME]</code> placeholder was chosen earlier.
</p>
</details>
</div>

----------------------------------------------------------------

### Step 6. Test 

----------------------------------------------------------------

```bash

sudo mount -a

```

----------------------------------------------------------------

<div center>
<details>
<summary>TIP</summary>
<p>
Step 6 reads config details from <code>fstab</code>
</p>
<p>
This means that multiple mount points are possible. Just
repeat the process for editing that file.
</p>
</details>
</div>

----------------------------------------------------------------

----------------------------------------------------------------

# Remarks

I've created a __Bash__ script named `sambo.sh` on the Omega.

It can open either Nautilus or the default Browser to the
given share name.

It can also display BOTH addresses (SMB and HTTP), given the
relative share path.

The root paths are:

- <input value="smb://neo" />
- <input value="http://neo/shares" />

Neither root name needs to be specified. In fact, doing is
would result in duplication.

## Root Shares

- `42`
- `backups`
- `bookmarks`
- `galadore`
- `media`
- `peaches`
- `ryzen`
- `tilly`
- `today`
- `workspace`
- `zed`


----------------------------------------------------------------

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
